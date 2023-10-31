import { Avatar, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph, Title } = Typography;

const AvatarStyled = styled(Avatar)`
    width: 55px;
    height: 55px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RankingNumberContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f6ff;
    color: #9ea5cf;
`
const UserCardContainer = styled(Row)`
    padding: 10px 10px 0px 20px;
`
const UserInfoContainerStyled = styled.div`
    margin-top: 20px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    background-color: white;
`
const UserNameStyled = styled(Title)`
    margin-top: 0px;
` 
const UserScoreStyled = styled(Paragraph)`
    margin-top: 0px;
`
export { AvatarStyled, RankingNumberContainer, UserCardContainer, UserInfoContainerStyled, UserNameStyled, UserScoreStyled }