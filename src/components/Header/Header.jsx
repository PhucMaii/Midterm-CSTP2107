import { Avatar, Col } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { RowContainerStyled, TitleStyled } from "./styles";

export default function Header() {
    return (
        <RowContainerStyled style={{alignItems: 'start'}}>
            <Col span={4}>
                <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col span={12}>
                <TitleStyled level={4}>Hello, Bin</TitleStyled>
            </Col>
        </RowContainerStyled>
    )
}