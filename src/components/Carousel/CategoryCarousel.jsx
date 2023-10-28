import { Col, Row } from "antd";
import { CategoryContainerStyled, PlayButtonStyled } from "./styles";
import { TitleStyled } from "../Header/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CategoryCarousel() {
    return (
        <Swiper
        style={{top: '-15vh', marginLeft: '20px',}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1.5}
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        onSlideChange={(e) => console.log(e.activeIndex)}
        >
            <SwiperSlide>
                <CategoryContainerStyled $activeIndex={true}>
                    <Row>
                        <Col span={24}>
                            <TitleStyled level={3}>Linux</TitleStyled>
                        </Col>
                        <Col>
                            <PlayButtonStyled $activeIndex={true} twoToneColor='rgba(0, 0, 0, 0)'/>
                        </Col>
                    </Row>
                </CategoryContainerStyled>
            </SwiperSlide>
            <SwiperSlide $activeIndex={1}>
            <CategoryContainerStyled>
                    <Row>
                        <Col span={24}>
                            <TitleStyled level={3}>Linux</TitleStyled>
                        </Col>
                        <Col>
                            <PlayButtonStyled twoToneColor='rgba(0, 0, 0, 0)'/>
                        </Col>
                    </Row>
                </CategoryContainerStyled>
            </SwiperSlide>
            <SwiperSlide $activeIndex={2}>
            <CategoryContainerStyled>
                    <Row>
                        <Col span={24}>
                            <TitleStyled level={3}>Linux</TitleStyled>
                        </Col>
                        <Col>
                            <PlayButtonStyled twoToneColor='rgba(0, 0, 0, 0)'/>
                        </Col>
                    </Row>
                </CategoryContainerStyled>
            </SwiperSlide>
            <SwiperSlide $activeIndex={3}>
            <CategoryContainerStyled>
                    <Row>
                        <Col span={24}>
                            <TitleStyled level={3}>Linux</TitleStyled>
                        </Col>
                        <Col>
                            <PlayButtonStyled twoToneColor='rgba(0, 0, 0, 0)'/>
                        </Col>
                    </Row>
                </CategoryContainerStyled>
            </SwiperSlide>
      </Swiper>
    )
}