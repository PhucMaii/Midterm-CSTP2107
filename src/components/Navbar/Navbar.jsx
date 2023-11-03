import { useEffect, useState } from "react";
import { HomeOutlined, LineChartOutlined, LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { Row } from "antd";
import { ColStyled, ContainerStyled } from "./styles";

export default function Navbar() {
    const [currentTab, setCurrentTab] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentTab(location.pathname);
    }, [location.pathname])

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
        {
            icon: <LogoutOutlined style={{fontSize: '30px'}} />,
            path: '/'
        },
    ]

    const signOut = () => {
        localStorage.clear();
    }

    return (
        <ContainerStyled >
            <Row>
                {
                    tabList.map((tab, index) => {
                        return <ColStyled 
                                    onClick={() => {
                                        if(tab.path === '/') {
                                            signOut();
                                        }
                                        navigate(tab.path);
                                    }} 
                                    span={6} 
                                    $isTab={currentTab === tab.path} 
                                    key={index}
                                >
                                    {tab.icon}
                                </ColStyled>
                    })
                }
            </Row>
        </ContainerStyled>
    )
}