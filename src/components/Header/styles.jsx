import { Typography, Row } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const TitleStyled = styled(Title) `
    color: white !important;
    position: relative;
    top: -20px;
`
const RowContainerStyled = styled(Row)`
    align-items: center;
    padding: 20px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 30vh;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

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

export { TitleStyled, RowContainerStyled }