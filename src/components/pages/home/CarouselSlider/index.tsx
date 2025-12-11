"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slides = [
  {
    id: "hero",
    src: "https://img.mvillage.vn/vjf4bmjTEASz-kzOCYCpOuIdKTF2talL0ZVs_zKvhj0/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2FBANNER_SAVVY_Hero_banner_EN_f33fea194d.jpg",
    alt: "Savvy hero banner",
  },
  {
    id: "hero-2",
    src: "https://img.mvillage.vn/vjf4bmjTEASz-kzOCYCpOuIdKTF2talL0ZVs_zKvhj0/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2FBANNER_SAVVY_Hero_banner_EN_f33fea194d.jpg",
    alt: "Savvy hero banner duplicate",
  },
];

export default function CarouselSlider() {
  return (
    <Swiper
      className="h-full w-full"
      centeredSlides
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.src}
            alt={slide.alt}
            width={2400}
            height={2400}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
