
import { Col, Row, Typography } from "antd";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import QuizCategoryCard from "../../components/QuizCategoryCard/QuizCategoryCard";
import { ContainerStyled, NotificationStyled, RowStyled } from "./styles";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { MehOutlined } from "@ant-design/icons";
import { categoriesEnum } from "../../utils/constant";

export default function HomePage() {
    const [recentQuiz, setRecentQuiz] = useState([]);
    const [curUser, _setCurUser] = useLocalStorage('current-user', {});
    const quizCollection = collection(db, 'quizzes');
    const quizQuery = query(quizCollection, where('userId', '==', curUser.docId));

    useEffect(() => {
        fetchRecentQuiz();
    }, [])

    const fetchRecentQuiz = async () => {
        try{
            const newRecentQuiz = [];
            const querySnapshot = await getDocs(quizQuery);
            if(!querySnapshot.isEmpty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    data.quizInfo = categoriesEnum.find((category) => {
                        return category.name === data.quizName;
                    })
                    newRecentQuiz.push(data);
                });
            }
            if(newRecentQuiz.length > 10) {
                newRecentQuiz.slice(0, 9);
            }
            setRecentQuiz(newRecentQuiz);
        } catch(error) {
            console.log(error);
        }
    }
    
    const { Title } = Typography;
    return (
        <ContainerStyled>
            <Header />
            <CategoryCarousel />
            <RowStyled >
                <Col span={24}>
                    <Title level={3}>Recent Quiz</Title>
                </Col>
            </RowStyled>
            {
                recentQuiz.length > 0 ? recentQuiz.map((quiz, index) => {
                    return (
                        <RowStyled key={index}>
                            <QuizCategoryCard quiz={quiz} />
                        </RowStyled>
                    )
                }) : (
                    <RowStyled justify="center">
                        <NotificationStyled level={4}><MehOutlined  /> No Data Found</NotificationStyled>
                    </RowStyled>
                )
            }
            <Row>
                <Navbar />
            </Row>
        </ContainerStyled>
    )
}