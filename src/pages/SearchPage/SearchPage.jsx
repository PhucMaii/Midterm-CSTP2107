import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ContainerStyled, RowStyled } from '../HomePage/styles'
import { Col, Input, Row } from 'antd'
import { SearchBar } from './styles';
import { categoriesEnum } from '../../utils/constant';
import QuizCategoryCard from '../../components/QuizCategoryCard/QuizCategoryCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import useLocalStorage from '../../hooks/useLocalStorage';
import { db } from '../../../firebase.config';

export default function SearchPage() {
    const [searchKeywords, setSearchKeywords] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [tempCategoryData, setTempCategoryData] = useState([]);
    const [curUser, _setCurUser] = useLocalStorage('current-user', {});
    const quizCollection = collection(db, 'quizzes');
    const quizQuery = query(quizCollection, where('userId', '==', curUser.docId));
    
    useEffect(() => {
        fetchRecentQuiz();
    }, []);

    useEffect(() => {
        const newCategoryData = tempCategoryData.filter((category) => {
            return category.quizName.toLowerCase().includes(searchKeywords.toLowerCase())
        });
        setCategoryData(newCategoryData);
    }, [searchKeywords]);

    const fetchRecentQuiz = async () => {
        try{
            const newRecentQuiz = [];
            const categoryNameList = [];
            const querySnapshot = await getDocs(quizQuery);
            if(!querySnapshot.isEmpty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    data.quizInfo = categoriesEnum.find((category) => {
                        return category.name === data.quizName;
                    })
                    newRecentQuiz.push(data);
                    categoryNameList.push(data.quizName)
                });
            }
            const updatedQuizList = categoriesEnum.filter((category) => {
                return !categoryNameList.includes(category.name);
            }).map((quiz) => {
                return {
                    currentRecord: 0,
                    isDone: false,
                    quizName: quiz.name,
                    totalQuizzes: 10,
                    userId: curUser.docId,
                    quizInfo: {
                        image: quiz.image
                    }
                }
            })
            newRecentQuiz.push(...updatedQuizList);
            setCategoryData(newRecentQuiz);
            setTempCategoryData(newRecentQuiz)
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <ContainerStyled>
            <Row style={{marginTop: '20px'}}>
                <Col span={24}>
                    <SearchBar 
                        size="large" 
                        placeholder="Enter Quiz Name" 
                        value={searchKeywords}
                        onChange={(e) => setSearchKeywords(e.target.value)}
                    />
                </Col>
            </Row>
                {
                    categoryData.map((category, index) => {
                        return (
                            <RowStyled style={{top: 0}} span={24} key={index}>
                                <QuizCategoryCard quiz={category}/>
                            </RowStyled>
                        )
                    })
                }
            <Navbar />
        </ContainerStyled>
    )
}
