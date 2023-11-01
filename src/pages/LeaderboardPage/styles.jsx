import { Row, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;
const LeaderboardTitle = styled(Title)`
    color: white !important;
    text-align: center;
    margin: 0 !important;
`
const UserRankingContainer = styled(Row)`
    padding: 10px;
`
export { LeaderboardTitle, UserRankingContainer}