import { Avatar, Col } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { RowContainerStyled, TitleStyled } from "./styles";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Header() {
    const [curUser, _setCurUser] = useLocalStorage('current-user', {});
    
    return (
        <RowContainerStyled style={{alignItems: 'start'}}>
            <Col span={4}>
                <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col span={12}>
                <TitleStyled level={4}>Hello, {curUser.username}</TitleStyled>
            </Col>
        </RowContainerStyled>
    )
}