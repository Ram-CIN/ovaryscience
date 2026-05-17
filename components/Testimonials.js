"use client";

import { Quote, Star } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Family from New Delhi",
    initials: "AK",
    review:
      "After years of trying, we finally found hope here. The doctors explained every step with patience, and the care felt personal...",
    tone: "from-amber-400 to-yellow-300",
  },
  {
    name: "Couple from Sydney",
    initials: "RM",
    review:
      "The team made a difficult journey feel much lighter. We always felt heard, informed, and supported through every stage of treatment..",
    tone: "from-slate-700 to-slate-600",
  },
  {
    name: "Parents from Jharkhand",
    initials: "SP",
    review:
      "Their expertise and kindness changed our lives. Today we are proud parents, we remain deeply grateful for the care we received.",
    tone: "from-rose-500 to-pink-500",
  },
  {
    name: "Family from Dubai, UAE",
    initials: "NK",
    review:
      "From the first consultation to the final positive result, everything felt organized, transparent, and genuinely compassionate.",
    tone: "from-cyan-500 to-teal-400",
  },
  {
    name: "Family from Dubai",
    initials: "HN",
    review:
      "From the first consultation to the final positive result, everything felt organized, transparent, and genuinely compassionate.",
    tone: "from-cyan-500 to-teal-400",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#fff3eb] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
            Happy families
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-4xl">
            What our patients say about us
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            These sample reviews show the kind of reassurance, trust, and care
            families look for during their fertility journey.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="mt-12 !pb-12"
        >
          {testimonials.map(({ name, initials, review, tone }) => (
            <SwiperSlide key={name} className="h-auto mt-3">
              <article
                className={`relative h-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${tone} p-6 text-white shadow-[0_18px_55px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-2`}
              >
                <Quote className="absolute right-5 top-5 h-10 w-10 text-white/20" />

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-lg font-extrabold backdrop-blur">
                  {initials}
                </div>

                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-white text-white"
                    />
                  ))}
                </div>

                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide">
                  {name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/95">
                  {review}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
