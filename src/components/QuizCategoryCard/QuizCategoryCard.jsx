import { PlayCircleFilled } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { ContainerStyled } from "./styles";

export default function QuizCategoryCard() {
    const { Title } = Typography;
    return (
        <ContainerStyled>
            <Row>
                <Col span={24}>
                    <Title level={4}>Categories Name</Title>
                </Col>   
            </Row>
            <Row style={{alignItems: 'center'}}>
                <Col span={2}>
                    <PlayCircleFilled size="small"/>
                </Col>
                <Col span={22}>
                    10 questions
                </Col>
            </Row>
        </ContainerStyled>
    )
}