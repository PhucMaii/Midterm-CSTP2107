import { Col } from 'antd'
import Navbar from '../../components/Navbar/Navbar'
import { ContainerStyled } from '../HomePage/styles'
import { RowContainerStyled } from '../../components/Header/styles'
import { LeaderboardTitle, UserRankingContainer } from './styles'
import UserRanking from '../../components/UserRanking/UserRanking'
import Top3Chart from '../../components/Top3Chart/Top3Chart'

export default function LeaderboardPage() {

    return (
      <ContainerStyled>
          <RowContainerStyled style={{height: 'auto', paddingBottom: '20px'}}>
              <Col span={24}>
                  <LeaderboardTitle level={3}>Leaderboard</LeaderboardTitle>
              </Col>
          <Top3Chart />
          </RowContainerStyled>
          <UserRankingContainer>
            <UserRanking />
          </UserRankingContainer>
          <Navbar />
      </ContainerStyled>
  )
}
