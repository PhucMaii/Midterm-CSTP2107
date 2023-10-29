import { Button, Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const AnswerButton = styled.button`
    inline-size: 150px;
    padding: 10px;
    orverflow-wrap: break-word;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;
    border: none !important;
    background-color: ${(props) => props.$showAnswer && props.$isCorrect ? '#389e0d' : 
                                    props.$showAnswer && !props.$isCorrect && props.$isChoose ? '#cf1322': '#fafafa'
                        };
`

const AnswersContainer = styled(Row)`
    margin: 20px 40px 40px 40px;    
`   
const AnswerContainer = styled(Col)`
    margin-top: 5vh;
`
const AnswerTitle = styled(Title)`
    margin-top: 0 !important;
    color: ${(props) => props.$showAnswer && props.$isCorrect ? 'white' : 
    props.$showAnswer && !props.$isCorrect && props.$isChoose ? 'white': 'black'
    } !important;
`
const CloseButton = styled(Button)`
    background-color: white !important;
    border-radius: 15px;
    width: 50px;
    height: 50px;
    border: none !important;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const NextButton = styled(Button)`
    color: white;
    font-size: 20px;
    padding-top: 0;
    height: 50px;
    width: 200px;
    background: ${(props) => props.$disabled ? 'grey' : 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'};
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    } 
`
const TitleContainerStyled = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    margin-top: 7vh;
    margin-bottom: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TitleStyled = styled(Title)`
    color: white; 
    text-align: center;
    margin: 0 !important;
`

export { 
    AnswerButton, 
    AnswersContainer, 
    AnswerContainer, 
    AnswerTitle, 
    CloseButton, 
    NextButton, 
    TitleContainerStyled, 
    TitleStyled 
}