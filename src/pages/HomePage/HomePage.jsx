
import { Col, Row, Typography } from "antd";
import Header from "../../components/Header/Header";
import QuizCategoryCard from "../../components/QuizCategoryCard/QuizCategoryCard";
import { RowStyled } from "./styles";

export default function HomePage() {
    const { Title } = Typography;
    return (
        <>
            <Header />
            <RowStyled >
                <Col span={24}>
                    <Title level={4}>Quiz Categories</Title>
                </Col>
            </RowStyled>
            <RowStyled>
                <QuizCategoryCard />
            </RowStyled>
        </>
    )
}