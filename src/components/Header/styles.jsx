import { purple } from "@ant-design/colors";
import { Typography, Row } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const TitleStyled = styled(Title) `
    color: white !important;
`
const RowContainerStyled = styled(Row)`
    align-items: center;
    padding: 20px;
    background-color: ${purple[3]};
`

export { TitleStyled, RowContainerStyled }