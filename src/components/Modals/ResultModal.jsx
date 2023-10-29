import Confetti from 'react-confetti';
import PropTypes from 'prop-types';
import { Button, Col, Row, Typography } from 'antd';
import { IncompletedStyled, ModalStyled } from './styles';

const losingMessage = {
    lowest: "You need more learning",
    middle: "Getting better next time",
    almost: "Almost there"
}

export default function ResultModal({ 
    handleOk, 
    handleTryAgain,
    open, 
    record, 
    totalQuizzes, 
    quizName 
}) {
    const { Title } = Typography;

    const renderRecordMsg = () => {
        if(record < 5) {
            return losingMessage.lowest;
        } else if(5 <= record < 8) {
            return losingMessage.middle;
        } else {
            return losingMessage.almost;
        }
    }
  return (
    <ModalStyled 
        open={open}
        title="Result" 
        footer={[
            <Button key="back" onClick={handleTryAgain}>Try Again</Button>,
            <Button type="primary" key="submit" onClick={handleOk}>Ranking Board</Button>,
        ]}
    >
        <Row align='middle'>
            {record === totalQuizzes && <Confetti />}
            <Col span={4}><IncompletedStyled twoToneColor="red" /></Col>
            <Col span={20}>
                <Title style={{top: '-15px'}} level={4}>{record === totalQuizzes ? `Congratulations !!! You completed ${quizName} quiz` : renderRecordMsg() } </Title>
            </Col>
            <Col span={24}>Points earned:  {record}</Col>
        </Row>
        
    </ModalStyled>
  )
}

ResultModal.propTypes = {
    handleOk: PropTypes.func,
    handleTryAgain: PropTypes.func,
    open: PropTypes.bool, 
    onCancel: PropTypes.func, 
    record: PropTypes.number, 
    totalQuizzes: PropTypes.number, 
    quizName: PropTypes.string 
}