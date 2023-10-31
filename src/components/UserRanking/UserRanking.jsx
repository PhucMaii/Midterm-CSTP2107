import { Col, Typography } from 'antd'
import { 
    AvatarStyled,  
    RankingNumberContainer, 
    UserCardContainer, 
    UserInfoContainerStyled, 
    UserNameStyled, 
    UserScoreStyled 
} from './styles';

export default function UserRanking() {
    return (
        <UserInfoContainerStyled>
            <UserCardContainer>
                <Col span={5}>
                    <AvatarStyled shape="square">Bi</AvatarStyled>
                </Col>
                <Col span={13}>
                    <UserNameStyled level={5}>Bin Mai</UserNameStyled>
                    <UserScoreStyled>2100 points</UserScoreStyled>
                </Col>
                <Col style={{top: '10px'}}>
                    <RankingNumberContainer span={6}>
                        4
                    </RankingNumberContainer>
                </Col>
            </UserCardContainer>
        </UserInfoContainerStyled>
  )
}
