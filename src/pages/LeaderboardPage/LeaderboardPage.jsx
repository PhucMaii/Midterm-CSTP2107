import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ContainerStyled } from '../HomePage/styles'
import { RowContainerStyled } from '../../components/Header/styles'
import { Col, Typography } from 'antd'
import { LeaderboardTitle } from './styles'

export default function LeaderboardPage() {
    const { Title } = Typography;
  return (
    <ContainerStyled>
        <RowContainerStyled>
            <Col span={24}>
                <LeaderboardTitle level={3}>Leaderboard</LeaderboardTitle>
            </Col>
        </RowContainerStyled>
        <Navbar />
    </ContainerStyled>
  )
}
