import { Row } from "antd";
import styled from "styled-components";

const CardContainer = styled(Row)`
    flex-direction: row;
`
const QuizCategoryContainer = styled.div`
    padding: 0px 20px 20px 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    background-color: white;
    width: 100%;
`
const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

export { CardContainer, QuizCategoryContainer, ImageStyled }