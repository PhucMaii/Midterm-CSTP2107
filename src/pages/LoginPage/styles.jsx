import { Form } from "antd";
import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40%;
`
const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
    border-radius: 20px;
    gap: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export { ContainerStyled, FormStyled }