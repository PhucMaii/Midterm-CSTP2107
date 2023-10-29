import { Avatar, Col, Typography } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { RowContainerStyled, TitleStyled } from "./styles";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Header() {
    const [curUser, _setCurUser] = useLocalStorage('current-user', {});
    const { Title } = Typography;
    return (
        <RowContainerStyled style={{alignItems: 'start'}}>
            <Col span={4}>
                <Avatar size="large">{curUser.username.slice(0,2).toUpperCase()}</Avatar>
            </Col>
            <Col span={12}>
                <TitleStyled level={4}>Hello, {curUser.username.toUpperCase()}</TitleStyled>
            </Col>
        </RowContainerStyled>
    )
}