import { Image } from "@chakra-ui/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    {url: "https://images.unsplash.com/photo-1676107983242-be49d4a542ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {url: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"},
    {url: "https://images.unsplash.com/photo-1597861405049-0b011428568f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {url: "https://images.unsplash.com/photo-1668540025094-dbf92b8b0fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
]

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
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image
                        w='100%'
                        h='100vh'
                        bgImage={img.url}
                        bgSize="cover"
                        bgPos="center"
                        bgRepeat="no-repeat"
                    />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}