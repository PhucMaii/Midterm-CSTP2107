import PropTypes from 'prop-types';
import { Col, Progress, Row, Space, Typography } from "antd";
import { CardContainer, ContainerStyled, ImageStyled } from "./styles";

export default function QuizCategoryCard({quiz}) {
    const { Title } = Typography;
    return (
        <ContainerStyled>
            <CardContainer 
                align="middle"
                gutter={[8, 0]} 
            >
                <Col span={8} style={{ top: '15px'}}>
                    <ImageStyled src={quiz.quizInfo.image}/>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24}>
                            <Title level={4}>{quiz.quizName}</Title>
                        </Col>   
                    </Row>
                    <Row align="middle">
                        <Col span={22}>
                            {quiz.isDone ? "You completed the quiz" : "Let's finish the quiz"}
                        </Col>
                    </Row>
                </Col>
                <Col span={4} style={{ top: '15px'}}>
                    <Space wrap>
                        <Progress 
                            format={() => `${quiz.currentRecord} / ${quiz.totalQuizzes} `} 
                            percent={quiz.currentRecord / quiz.totalQuizzes * 100} 
                            size="small" 
                            strokeWidth={7} 
                            type="circle" 
                        />
                    </Space>

                </Col>
            </CardContainer>     
        </ContainerStyled>
    )
}

QuizCategoryCard.propTypes = {
    quiz: PropTypes.object.isRequired
}