import { HomeOutlined, LineChartOutlined, SearchOutlined } from "@ant-design/icons";
import { Row } from "antd";
import { ColStyled, ContainerStyled } from "./styles";

export default function Navbar() {
    return (
        <ContainerStyled >
            <Row>
                <ColStyled span={8}><HomeOutlined style={{fontSize: '30px'}} /></ColStyled>
                <ColStyled span={8}><SearchOutlined style={{fontSize: '30px'}} /></ColStyled>
                <ColStyled span={8}><LineChartOutlined style={{fontSize: '30px'}} /></ColStyled>
            </Row>
        </ContainerStyled>
    )
}