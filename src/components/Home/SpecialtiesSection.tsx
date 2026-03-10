'use client';

import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SpecialtiesSection() {

  // Slider 1 refs
  const prevRef1 = useRef(null);
  const nextRef1 = useRef(null);

  // Slider 2 refs
  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);

  const [swiper1, setSwiper1] = useState<SwiperType | null>(null);
  const [swiper2, setSwiper2] = useState<SwiperType | null>(null);

  // Slider 1 navigation
  useEffect(() => {
    if (swiper1 && prevRef1.current && nextRef1.current) {
      swiper1.params.navigation = {
        prevEl: prevRef1.current,
        nextEl: nextRef1.current,
        disabledClass: 'swiper-button-disabled',
      };

      swiper1.navigation.init();
      swiper1.navigation.update();
    }
  }, [swiper1]);

  // Slider 2 navigation
  useEffect(() => {
    if (swiper2 && prevRef2.current && nextRef2.current) {
      swiper2.params.navigation = {
        prevEl: prevRef2.current,
        nextEl: nextRef2.current,
        disabledClass: 'swiper-button-disabled',
      };

      swiper2.navigation.init();
      swiper2.navigation.update();
    }
  }, [swiper2]);

  return (
    <section className='spaec-60 bglight bg-pattern relative'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title'>
              <h2 className='text-center'>Our Specialized Recipies</h2>
            </div>

            {/* FIRST SLIDER */}
            <div className='sliderspecialties'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={25}
                slidesPerView={2}
                onSwiper={setSwiper1}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
              >
                {[
                  {
                    title: 'Mutton Korma',
                    desc: 'Lamm mit Rahmkäse, Rosinen und Cashew in einer feinen Curry Sahne Soße',
                    img: '/images/specialized/1.jpg',
                  },
                  {
                    title: 'Paneer Tikka',
                    desc: 'Indischer Rahmkäse, mariniert in einer Joghurtgewürzmischung mit Paprika und Zwiebeln im Tandooriofen gegrillt',
                    img: '/images/specialized/2.jpg',
                  },
                  {
                    title: 'Tandoori Chicken',
                    desc: 'Hähnchenkeulen mariniert in Joghurt und Tandoori-Gewürzen, im Ofen knusprig gegrillt.',
                    img: '/images/specialized/3.jpg',
                  },
                  {
                    title: 'Chili Fisch',
                    desc: 'Rotbarschfilet mit Paprika, Zwiebeln, Ingwer, Bambus und Knoblauch in scharfer Chilisauce.',
                    img: '/images/specialized/4.jpg',
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='specialties-box'>
                      <div className='specialties-img'>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={285}
                          height={260}
                        />
                      </div>
                      <div className='specialties-content'>
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <Link
                            href='/contact'
                            className='button-first btn-main'
                          >
                            Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className='slider-nav'>
                <button ref={prevRef1} className='nav-left custom-nav'>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button ref={nextRef1} className='nav-right custom-nav'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>

            {/* SECOND SLIDER */}
            <div className='sliderspecialties'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={25}
                slidesPerView={2}
                onSwiper={setSwiper2}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
              >
                {[
                  {
                    title: 'Paneer Pakoras',
                    desc: '4 Stück hausgemachter Rahmkäse, paniert in Kichererbsenmehl und frittiert',
                    img: '/images/specialized/5.jpg',
                  },
                  {
                    title: 'Frühlingsrollen',
                    desc: '4 goldbraun frittierte Frühlingsrollen mit exotisch gewürztem Gemüse',
                    img: '/images/specialized/6.jpg',
                  },
                  {
                    title: 'Palak Paneer',
                    desc: 'Zarte Panirstücke in cremigen Spinat mit aromatischen Gewürzen.',
                    img: '/images/specialized/7.jpg',
                  },
                  {
                    title: 'Bhindi Masala',
                    desc: 'Okraschoten mit Ingwer, Knoblauch in einer würzigen Tomaten- und Zwiebelsauce',
                    img: '/images/specialized/8.jpg',
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='specialties-box'>
                      <div className='specialties-img'>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={285}
                          height={260}
                        />
                      </div>
                      <div className='specialties-content'>
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <Link
                            href='/contact'
                            className='button-first btn-main'
                          >
                            Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className='slider-nav'>
                <button ref={prevRef2} className='nav-left custom-nav'>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button ref={nextRef2} className='nav-right custom-nav'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}