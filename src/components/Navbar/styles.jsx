import { Col } from 'antd';
import styled from 'styled-components';

const ColStyled = styled(Col)`
    text-align: center;
`
const ContainerStyled = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
export { ColStyled, ContainerStyled }