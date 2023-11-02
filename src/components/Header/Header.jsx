import { Avatar, Col } from "antd";
import { RowContainerStyled, TitleStyled } from "./styles";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Header() {
    // eslint-disable-next-line no-unused-vars
    const [curUser, _setCurUser] = useLocalStorage('current-user', {});
    return (
        <RowContainerStyled style={{alignItems: 'start'}}>
            <Col span={4}>
                <Avatar size="large">{curUser.username.slice(0,2).toUpperCase()}</Avatar>
            </Col>
            <Col span={12}>
                <TitleStyled level={4}>Hello, {curUser.username}</TitleStyled>
            </Col>
        </RowContainerStyled>
    )
}