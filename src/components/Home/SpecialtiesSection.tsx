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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Clean up existing navigation
      if (swiperInstance.navigation) {
        swiperInstance.navigation.destroy();
      }

      // Update navigation elements
      swiperInstance.params.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: 'swiper-button-disabled'
      };

      // Initialize navigation if it exists
      if (swiperInstance.navigation) {
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [swiperInstance]);

  return (
    <section className='spaec-60 bglight bg-pattern relative'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title'>
              <h2 className='text-center'>Our Specialized Recipies</h2>
            </div>
            <div className='sliderspecialties'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={25}
                slidesPerView={2}
                onSwiper={setSwiperInstance}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
              >
                {[
                  {
                    title: 'Butter Chicken',
                    desc: 'Tender chicken simmered in creamy tomato gravy, spiced perfectly with a hint of sweetness—a classic Indian favorite you’ll crave again and again!',
                    img: '/images/butter-chicken.jpg',
                  },
                  {
                    title: 'Mutton',
                    desc: 'Tender, juicy cuts simmered in rich, spiced gravy, Slow-cooked to perfection for deep, bold flavor, A true delight for every meat lover’s soul.',
                    img: '/images/butter-chicken.jpg',
                  },
                  {
                    title: 'Tandoori-Delikatessen',
                    desc: 'Savor the smoky, flavorful magic of Tandoori Delikatessen—marinated meats grilled to perfection with authentic Indian spices for an unforgettable taste!',
                    img: '/images/butter-chicken.jpg',
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='specialties-box'>
                      <div className='specialties-img'>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={240}
                          height={285}
                        />
                      </div>
                      <div className='specialties-content'>
                        {/* <div className='about-us-pattern3'>
                          <Image
                            src='/images/flower-path-one.png'
                            alt='About Us'
                            width={300}
                            height={300}
                          />
                        </div> */}
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <Link
                            href='/contact'
                            className='button-first btn-main'
                          >
                            Reserve Table!{' '}
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Prev Button */}
              <div className='slider-nav'>
                <button ref={prevRef} className='nav-left custom-nav'>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                {/* Custom Next Button */}
                <button ref={nextRef} className='nav-right custom-nav'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>

            <div className='sliderspecialties'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={25}
                slidesPerView={2}
                onSwiper={setSwiperInstance}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
              >
                {[
                  {
                    title: 'Butter Chicken',
                    desc: 'Tender chicken simmered in creamy tomato gravy, spiced perfectly with a hint of sweetness—a classic Indian favorite you’ll crave again and again!',
                    img: '/images/butter-chicken.jpg',
                  },
                  {
                    title: 'Mutton',
                    desc: 'Tender, juicy cuts simmered in rich, spiced gravy, Slow-cooked to perfection for deep, bold flavor, A true delight for every meat lover’s soul.',
                    img: '/images/butter-chicken.jpg',
                  },
                  {
                    title: 'Tandoori-Delikatessen',
                    desc: 'Savor the smoky, flavorful magic of Tandoori Delikatessen—marinated meats grilled to perfection with authentic Indian spices for an unforgettable taste!',
                    img: '/images/butter-chicken.jpg',
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='specialties-box'>
                      <div className='specialties-img'>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={240}
                          height={285}
                        />
                      </div>
                      <div className='specialties-content'>
                        {/* <div className='about-us-pattern3'>
                          <Image
                            src='/images/flower-path-one.png'
                            alt='About Us'
                            width={300}
                            height={300}
                          />
                        </div> */}
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <Link
                            href='/contact'
                            className='button-first btn-main'
                          >
                            Reserve Table!{' '}
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Prev Button */}
              <div className='slider-nav'>
                <button ref={prevRef} className='nav-left custom-nav'>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                {/* Custom Next Button */}
                <button ref={nextRef} className='nav-right custom-nav'>
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
