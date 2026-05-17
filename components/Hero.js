"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Phone, ChevronsRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero/banner1.jpeg",
  },
  {
    image: "/hero/banner2.jpeg",
  },
  {
    image: "/hero/banner3.jpeg",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[calc(100vh-125px)] min-h-[620px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex h-full w-full items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Content */}
              <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white">
                <h1 className="mx-auto max-w-5xl text-4xl font-extrabold uppercase leading-tight tracking-[0.08em] drop-shadow-2xl md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>

                <p className="mt-6 text-2xl font-medium drop-shadow-lg md:text-4xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}