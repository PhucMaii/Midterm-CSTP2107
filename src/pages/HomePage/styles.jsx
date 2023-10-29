import { Row, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const ContainerStyled = styled.div`
    background-color: #f0f5ff;
    height: 100vh;
    overflow-y: auto;
`
const RowStyled = styled(Row)`
    padding: 20px;
    position: relative;
    top: -17vh;
`
const NotificationStyled = styled(Title)`
    color: grey !important;
`

export { ContainerStyled, RowStyled, NotificationStyled }