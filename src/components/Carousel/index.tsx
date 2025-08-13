/** @format */
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  .main-image {
    height: 100%;
    width: 100%;
  }
  .thumb-image {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style-type: none;
    list-style-type: none;
    padding: 0;
    margin-bottom: 2rem;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    font-size: 10px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 35px;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  max-height: 320px;
  &:hover {
    cursor: pointer;
  }
  &.thumb-container {
    max-height: 120px;
  }
  @media only screen and (min-width: 601px) and( max-width: 900px) {
    &.thumb-container {
      max-height: 100px;
    }
  }
  @media only screen and (max-width: 600px) {
    &.main-container {
      max-height: 260px;
    }
    &.thumb-container {
      max-height: 45px;
    }
  }
`;
export default function Carousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  let mobile =
    (window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth) < 500;

  return (
    <SliderContainer>
      <Swiper
        id="main"
        spaceBetween={10}
        slidesPerView={mobile ? 1 : 2}
        tag="section"
        wrapperTag="ul"
        pagination={{ clickable: true }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide tag="li" key={`main ${index}`}>
              <ImageContainer className="main-container">
                <img className="main-image" src={image} alt={index} />
              </ImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={5}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide tag="li" key={`thumb ${index}`}>
              <ImageContainer className="thumb-container">
                <img className="thumb-image" src={image} alt={index} />
              </ImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderContainer>
  );
}
