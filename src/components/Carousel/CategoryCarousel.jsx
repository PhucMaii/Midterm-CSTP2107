import { useState } from "react";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { categoriesEnum } from "../../utils/constant";
import { CategoryContainerStyled, PlayButtonStyled } from "./styles";
import { TitleStyled } from "./styles";
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CategoryCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView={1.5}
            style={{top: '-15vh', marginLeft: '20px'}}
        >
            {
                categoriesEnum.map((category, index) => {
                    return (
                    <SwiperSlide key={index}>
                        <CategoryContainerStyled
                            $activeIndex={activeIndex === index}
                            $image={category.image}
                        >
                            <Row>
                                <Col span={24}>
                                    <TitleStyled level={3}>{category.name}</TitleStyled>
                                </Col>
                                <Col>
                                    <PlayButtonStyled 
                                        onClick={() => navigate(`/home/quiz/${category.name}`)}
                                        $activeIndex={activeIndex === index} 
                                        twoToneColor='rgba(0, 0, 0, 0)'
                                    />
                                </Col>
                            </Row>
                        </CategoryContainerStyled>
                    </SwiperSlide>
                    )
                })
            }
      </Swiper>
    )
}