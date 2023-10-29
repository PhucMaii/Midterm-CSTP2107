import { PlayCircleTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;
const CategoryContainerStyled = styled.div`
    background-image: url(${(props) => props.$image});
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    background-size: ${(props) => props.$activeIndex ? '400px' : '400px'};
    padding: 10px;
    width: 40vw;
    height: ${(props) => props.$activeIndex ? '230px' : '200px'};
    border-radius: 20px;
`
const ContainerStyled = styled.div`
    position: absolute;
    left: 0;
    top: 12vh;
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow-x: auto;
    z-index: 1;
`
const PlayButtonStyled = styled(PlayCircleTwoTone)`
    border-radius: 50%;
    width: ${(props) => props.$activeIndex ? '50px' : '30px'};
    height: ${(props) => props.$activeIndex ? '50px' : '30px'};
    background-color: white;
    font-size: 50px;
`
const TitleStyled = styled(Title)`
    color: #ffffff !important;
`

export { CategoryContainerStyled, ContainerStyled, PlayButtonStyled, TitleStyled }