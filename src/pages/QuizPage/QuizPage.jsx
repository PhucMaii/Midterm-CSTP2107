import { CloseOutlined } from '@ant-design/icons';
import { Col, Progress, Space, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
    AnswerButton, 
    AnswerContainer, 
    AnswerTitle, 
    AnswersContainer, 
    CloseButton, 
    NextButton, 
    TitleContainerStyled, 
    TitleStyled 
} from './styles';
import { RowContainerStyled } from '../../components/Header/styles';
import { ContainerStyled } from '../HomePage/styles';
import { 
    Timestamp, 
    addDoc, 
    collection, 
    doc, 
    getDoc, 
    getDocs, 
    query, 
    updateDoc, 
    where 
} from 'firebase/firestore';
import { db } from '../../../firebase.config';
import useLocalStorage from '../../hooks/useLocalStorage';
import ResultModal from '../../components/Modals/ResultModal';
import CancelModal from '../../components/Modals/CancelModal';

const apiKey = import.meta.env.VITE_API_KEY;

export default function QuizPage() {
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isResultOpen, setIsResultOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [quizData, setQuizData] = useState([]);
    const [record, setRecord] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const navigate = useNavigate();
    const [curUser, setCurUser] = useLocalStorage('current-user', {});
    const { category } = useParams();
    const totalQuizzes = category === "Docker" ? 5 : 10;
    const quizCollection = collection(db, 'quizzes');
    const userCollection = collection(db, 'users');
    const userRef = doc(userCollection, curUser.docId);
    const quizQuery = query(quizCollection, 
        where('userId', '==', curUser.docId),
        where('quizName', '==', category)
    )
    const baseURL = `https://quizapi.io/api/v1/questions?category=${category}&apiKey=${apiKey}`;
    
    useEffect(() => {
        fetchQuizzes();
    }, [])

    const fetchQuizzes = async () => {
        setIsLoading(true);
        try{
            const response = await fetch(baseURL);
            const data = await response.json();
            let newData = data.filter((quiz) => {
                return quiz.answers.answer_a && 
                    quiz.answers.answer_b &&
                    quiz.answers.answer_c &&
                    quiz.answers.answer_d &&
                    !quiz.answers.answer_e &&
                    !quiz.answers.answer_f
            }).slice(0, totalQuizzes);
            const newArr = newData.map((data) => {
                const correctAnswer = Object.keys(data.answers).find((answer) => {
                    return data.correct_answers[`${answer}_correct`] === "true";
                })
                return {
                    ...data,
                    correct_answer: correctAnswer
                }
            }) 
            setQuizData(newArr);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsLoading(false);
        } catch(error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const handleUpdateUserAnswer = (value, correctAnswer) => {
        setCurrentAnswer(value);
        if(correctAnswer === value) {
            setRecord(record + 1);
        }
        setShowAnswer(true);
    }

    const handleNextButton = async (index) => {
        if(index < totalQuizzes - 1) {
            setShowAnswer(false); 
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            return;
        }
        try {
            setIsLoading(true);
            const userDoc = await getDoc(userRef);
            const userData = userDoc.data();
            let userScore = userData.score || 0;
            userScore += Math.floor(record / totalQuizzes * 100);
            const data = {
                currentRecord: record,
                isDone: record === totalQuizzes,
                quizName: category,
                startedAt: Timestamp.fromDate(new Date()),
                totalQuizzes,
                userId: curUser.docId
            }
            const querySnapshot = await getDocs(quizQuery);
            if(querySnapshot.empty) {
                await addDoc(quizCollection, data);
            } else {
                querySnapshot.forEach(async (document) => {
                    const docRef = doc(quizCollection, document.id);
                    const data = document.data();
                    try{
                        if(data.currentRecord < record) {
                            await updateDoc(docRef, {currentRecord: record});
                        }
                    } catch(error) {
                        console.log(error)
                    }
                })
            }
            await updateDoc(userRef, {score: userScore})
            setIsLoading(false);
            setIsResultOpen(true)
        } catch(error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const handleNavigateToRankingBoard = () => {
        navigate('/ranking-board');
    }

    const handleTryAgain = () => {
        window.location.reload();
    }

    const handleCancel = () => {
        setIsCancelModalOpen(false);
    }

    const handleLeave = () => {
        navigate('/home');
    }
 
    return (
        <ContainerStyled>
            <CancelModal 
                open={isCancelModalOpen}
                onCancel={handleCancel}
                handleLeave={handleLeave}
            />
            <ResultModal 
                handleOk={handleNavigateToRankingBoard}
                handleTryAgain={handleTryAgain}
                open={isResultOpen} 
                onCancel={() => setIsResultOpen(false)}
                record={record}
                totalQuizzes={totalQuizzes}
                quizName={category}
            />
        {
            isLoading ? 
                (
                    <ContainerStyled 
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Spin/>
                    </ContainerStyled>
                ) : 
                ( 
                    <div>
                    {
                        quizData.length > 0 && quizData.map((quiz, index) => {
                            if(currentQuestionIndex !== index) {
                                return;
                            }
                            return (
                                <React.Fragment key={quiz.id}>
                                    <RowContainerStyled style={{height: 'auto'}}>
                                        <Col span={4} style={{ top: '10px'}}>
                                            <Space wrap>
                                                <Progress 
                                                    format={() => `${record} / ${totalQuizzes}`} 
                                                    percent={record / totalQuizzes * 100} 
                                                    size="small" 
                                                    strokeWidth={7} 
                                                    type="circle" 
                                                />
                                            </Space>
                                        </Col>
                                        <Col span={16}>
                                            <TitleStyled 
                                                style={{color: 'white', textAlign: "center"}} 
                                                level={3}
                                            >
                                                {category}
                                            </TitleStyled>   
                                        </Col>
                                        <Col span={4} style={{ top: '10px'}}>
                                            <CloseButton onClick={() => setIsCancelModalOpen(true)} ><CloseOutlined style={{color: 'black'}} /></CloseButton>
                                        </Col>
                                        <Col span={24}>
                                            <TitleContainerStyled>
                                                <TitleStyled level={4}>Question {index + 1}: {quiz.question}</TitleStyled>
                                            </TitleContainerStyled>
                                        </Col>
                                    </RowContainerStyled>
                                    <AnswersContainer justify="center">
                                        {
                                            Object.keys(quiz.answers).map((answer) => {
                                                if(!quiz.answers[answer]) {
                                                    return;
                                                }
                                                return (
                                                    <AnswerContainer span={12} key={`${answer}_correct`}>
                                                        <AnswerButton 
                                                            onClick={() => handleUpdateUserAnswer(answer, quiz.correct_answer)}
                                                            $showAnswer={showAnswer}
                                                            $isChoose={currentAnswer === answer}
                                                            $isCorrect={quiz.correct_answer === answer} 
                                                            disabled={showAnswer}
                                                        >
                                                            <AnswerTitle  
                                                                $showAnswer={showAnswer}
                                                                $isChoose={currentAnswer === answer}
                                                                $isCorrect={quiz.correct_answer === answer} 
                                                                level={4}
                                                            >
                                                                {quiz.answers[answer]}
                                                            </AnswerTitle>
                                                    </AnswerButton>
                                                    </AnswerContainer>            
                                                )
                                            })
                                        }
                                    </AnswersContainer>
                                    {
                                        showAnswer && quiz.explanation && <div>
                                            <TitleStyled level={5} style={{color: 'black'}}>Explanation: {quiz.explanation}</TitleStyled>
                                        </div>    
                                    }
                                    <div style={{textAlign: "center", marginTop: '20px'}}>
                                        <NextButton 
                                            $disabled={!showAnswer} 
                                            disabled={!showAnswer} 
                                            onClick={() => {handleNextButton(index)}}
                                        >
                                            Next
                                        </NextButton>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                    </div>
                )
        }
        </ContainerStyled>
  )
}
