"use client";
import { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gsap from "gsap";

export default function HeroSection() {
  const slides = [
    {
      title: "We Serve Food, Harmony & Laughter since 1998",
      desc: "Delicious foods With Wonderful Eating",
      img: "/images/banner1.jpg",
    },
    {
      title: "We Serve Food, Harmony & Laughter since 1998",
      desc: "Delicious foods With Wonderful Eating",
      img: "/images/banner2.jpg",
    },
    // Add more slides if needed
  ];

  const contentRefs = useRef<HTMLDivElement[]>([]);

  // Animate content on active slide
  const animateSlideContent = (activeIndex: number) => {
    // Reset all content elements
    contentRefs.current.forEach((el) => {
      if (!el) return;
      gsap.set(el.querySelectorAll(".title, .desc, .buttons"), {
        autoAlpha: 0,
        y: 50,
      });
    });

    const activeContent = contentRefs.current[activeIndex];
    if (activeContent) {
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });
      tl.to(activeContent.querySelector(".title"), { autoAlpha: 1, y: 0 })
        .to(activeContent.querySelector(".desc"), { autoAlpha: 1, y: 0 }, "-=0.4")
        .to(activeContent.querySelector(".buttons"), { autoAlpha: 1, y: 0 }, "-=0.4");
    }
  };

  return (
    <section className="herobanner relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        effect="parallax"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        parallax={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          animateSlideContent(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          animateSlideContent(swiper.realIndex);
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-row"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
             
            >
              <div className="container">
                <div
                  className="herobanner-content-box"
                  ref={(el) => {
                    if (el) contentRefs.current[index] = el;
                  }}
                >
                  <div className="herobanner-content">
                    <h1 className="title" data-swiper-parallax="-300">
                      {item.title}
                    </h1>
                    <h2 className="desc" data-swiper-parallax="-200">
                      {item.desc}
                    </h2>
                    <div className="about-content-btn buttons" data-swiper-parallax="-100">
                      <Link href="/contact" className="button-first btn-main">
                        Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                      <Link href="/about" className="button-second btn-main">
                        Read More <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
