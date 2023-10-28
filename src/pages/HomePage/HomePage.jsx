
import { Col, Row, Typography } from "antd";
import Header from "../../components/Header/Header";
import QuizCategoryCard from "../../components/QuizCategoryCard/QuizCategoryCard";
import { ContainerStyled, RowStyled } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel";
export default function HomePage() {
    const { Title } = Typography;
    return (
        <ContainerStyled>
            <Header />
            <CategoryCarousel />
            <RowStyled >
                <Col span={24}>
                    <Title level={4}>Quiz Categories</Title>
                </Col>
            </RowStyled>
            <RowStyled>
                <QuizCategoryCard />
            </RowStyled>
            <RowStyled>
                <QuizCategoryCard />
            </RowStyled>
            <RowStyled>
                <QuizCategoryCard />
            </RowStyled>
            <RowStyled>
                <QuizCategoryCard />
            </RowStyled>
            <Row>
                <Navbar />
            </Row>
        </ContainerStyled>
    )
}