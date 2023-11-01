import { useEffect, useState } from 'react'
import { Col, Flex, Spin } from 'antd'
import Navbar from '../../components/Navbar/Navbar'
import { ContainerStyled } from '../HomePage/styles'
import { RowContainerStyled } from '../../components/Header/styles'
import { LeaderboardTitle, UserRankingContainer } from './styles'
import UserRanking from '../../components/UserRanking/UserRanking'
import Top3Chart from '../../components/Top3Chart/Top3Chart'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase.config'

export default function LeaderboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const userCollection = collection(db, 'users');
  const userQuery = query(userCollection, orderBy('score'));

  useEffect(() => {
    fetchUsersList();
  }, [])

  const fetchUsersList = async () => {
    setIsLoading(true);
    try {
      const newUsersList = [];
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newUsersList.unshift(data);
      })
      console.log(newUsersList[0]);
      setUsersList(newUsersList);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <ContainerStyled style={{paddingBottom: '60px',}}>
      {
        isLoading ? (
          <Flex align='center' justify='center'>
            <Spin size="large" />
          </Flex>
        ) : (
          <>
            <RowContainerStyled style={{height: 'auto', paddingBottom: '23px', justifyContent: 'center'}}>
              <Col span={24}>
                  <LeaderboardTitle level={3}>Leaderboard</LeaderboardTitle>
              </Col>
              <Top3Chart 
                firstPlace={usersList[0]} 
                secondPlace={usersList[1]}
                thirdPlace={usersList[2]} 
              />
            </RowContainerStyled>
            <UserRankingContainer>
              {
                usersList.map((user, index) => {
                  return (
                    <UserRanking 
                      key={index}  
                      rankingNumber={index + 4}
                      user={user}
                    />
                  )
                })
              }
            </UserRankingContainer>
            <Navbar />
          </>
        )
      }
    </ContainerStyled>
  )
}
