import { Avatar, Col } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { RowContainerStyled, TitleStyled } from "./styles";

export default function Header() {
    return (
        <RowContainerStyled style={{alignItems: 'center'}}>
        <Col span={12}>
            <TitleStyled level={2}>Let&apos;s play</TitleStyled>
            <TitleStyled level={5}>And be the first</TitleStyled>
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
            <Avatar size="large" icon={<UserOutlined />} />
        </Col>

        </RowContainerStyled>
    )
}