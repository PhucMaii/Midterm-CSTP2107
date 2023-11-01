import { Col } from 'antd'
import PropTypes from 'prop-types'
import { 
    AvatarStyled,  
    RankingNumberContainer, 
    UserCardContainer, 
    UserInfoContainerStyled, 
    UserNameStyled, 
    UserScoreStyled 
} from './styles';
import { capitalize } from '../../utils/string';

export default function UserRanking({ rankingNumber, user }) {
    return (
        <UserInfoContainerStyled>
            <UserCardContainer>
                <Col span={5}>
                    <AvatarStyled shape="square">{capitalize(user.username)}</AvatarStyled>
                </Col>
                <Col span={13}>
                    <UserNameStyled level={5}>{user.username}</UserNameStyled>
                    <UserScoreStyled>{user.score} points</UserScoreStyled>
                </Col>
                <Col span={6} style={{top: '10px'}}>
                    <RankingNumberContainer>
                        {rankingNumber}
                    </RankingNumberContainer>
                </Col>
            </UserCardContainer>
        </UserInfoContainerStyled>
  )
}

UserRanking.propTypes = {
    rankingNumber: PropTypes.number,
    user: PropTypes.object
}