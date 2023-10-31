
import { CrownTwoTone } from '@ant-design/icons';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const CrownedIconStyled = styled(CrownTwoTone)`
    font-size: 30px;
`
const CubeContainer = styled.div`
    position: relative; 
    width: 112px; 
    height: ${(props) => props.$height}; 
    top: ${(props) => props.$top};
    transform-style: preserve-3d; 
    transform: rotateX(-15deg);
`
const SurfaceStyled = styled.div`
    width: 100%; 
    height: 100%; 
    position: absolute; 
    top: 0; 
    left: 0; 
    opacity: 0.9; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$backgroundColor};
    transform: ${(props) => props.$transform};
    transform-origin: ${(props) => props.$transformOrigin}; 
`
const UserInfoStyled = styled(Title)`
    margin-top: 0px !important;
`
export { CrownedIconStyled, CubeContainer, SurfaceStyled, UserInfoStyled }