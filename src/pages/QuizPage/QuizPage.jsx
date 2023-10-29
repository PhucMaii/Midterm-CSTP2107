import { CloseOutlined } from '@ant-design/icons';
import { Col, Progress, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const apiKey = import.meta.env.VITE_API_KEY;

export default function QuizPage() {
    const [quizData, setQuizData] = useState([]);
    const { name } = useParams();
    const baseURL = `https://quizapi.io/api/v1/questions?category=${name}&apiKey=${apiKey}&limit=10`;
    const { Title } = Typography;
    useEffect(() => {
        fetchQuizzes();
    }, [])
    const fetchQuizzes = async () => {
        try{
            const response = await fetch(baseURL);
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <div>
            <RowContainerStyled style={{height: 'auto'}}>
                <Col span={4} style={{ top: '10px'}}>
                    <Space wrap>
                        <Progress 
                            format={() => 'hi'} 
                            percent={75} 
                            size="small" 
                            strokeWidth={7} 
                            type="circle" 
                        />
                    </Space>
                </Col>
                <Col span={16}>
                    <TitleStyled style={{color: 'white', textAlign: "center"}} level={3}>Linux</TitleStyled>
                </Col>
                <Col span={4} style={{ top: '10px'}}>
                    <CloseButton ><CloseOutlined style={{color: 'black'}} /></CloseButton>
                </Col>
                <Col span={24}>
                    <TitleContainerStyled>
                        <TitleStyled level={4}>What is the purpose of ‘at’ command?</TitleStyled>
                    </TitleContainerStyled>
                </Col>
            </RowContainerStyled>
            <AnswersContainer justify="center">
                <AnswerContainer span={12}>
                    <AnswerButton><AnswerTitle level={4}>Bin</AnswerTitle></AnswerButton>
                </AnswerContainer>
                <AnswerContainer span={12} style={{textAlign: 'right'}}>
                    <AnswerButton><AnswerTitle level={4}>Bin</AnswerTitle></AnswerButton>
                </AnswerContainer>
                <AnswerContainer span={12}>
                    <AnswerButton><AnswerTitle level={4}>Bin</AnswerTitle></AnswerButton>
                </AnswerContainer>
                <AnswerContainer span={12} style={{textAlign: 'right'}}>
                    <AnswerButton><AnswerTitle level={4}>Bin</AnswerTitle></AnswerButton>
                </AnswerContainer>
            </AnswersContainer>
            <div style={{textAlign: "center"}}>
                <NextButton>Next</NextButton>
            </div>
        </div>
  )
}
