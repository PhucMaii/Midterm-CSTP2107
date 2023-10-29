import { HomeOutlined, LineChartOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { Row } from "antd";
import { ColStyled, ContainerStyled } from "./styles";

export default function Navbar() {
    const navigate = useNavigate();
    const tabList = [
        {
            icon: <HomeOutlined style={{fontSize: '30px'}} />,
            path: '/home'
        },
        {
            icon: <SearchOutlined style={{fontSize: '30px'}} />,
            path: '/search'
        },
        {
            icon: <LineChartOutlined style={{fontSize: '30px'}} />,
            path: '/ranking-board'
        },
    ]
    return (
        <ContainerStyled >
            <Row>
                {
                    tabList.map((tab, index) => {
                        return <ColStyled onClick={() => navigate(tab.path)} span={8} key={index}>{tab.icon}</ColStyled>
                    })
                }
            </Row>
        </ContainerStyled>
    )
}