import { Flex, Text } from "@chakra-ui/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Carousel() {
    return (
        <Swiper
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            waitForTransition: true,
        }}
        pagination={{
            clickable: true,
            dynamicBullets: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
        >
            <SwiperSlide>
                <Flex w='100%' h='600px' bg='red'></Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex w='100%' h='600px' bg='purple'></Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex w='100%' h='600px' bg='orange'></Flex>
            </SwiperSlide>
        </Swiper>
    )
}