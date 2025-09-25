'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BookRequestSection() {
  const slides = [
    {
      id: 1,
      title:
        'The best Indian food in Berlin! Everything from the biryani to the butter chicken is top-notch. Excellent service and beautiful ambiance.',
      author: 'Liya Allen, Manager',
    },
    {
      id: 2,
      title:
        'Masala’s tiffin service saved my weekdays! Tasty, fresh, and delivered on time.',
      author: 'John Doe, Guest',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    persons: '1 Person',
    date: '',
    time: '08 : 00 am',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Booking request sent successfully!');
        setFormData({
          name: '',
          phone: '',
          persons: '1 Person',
          date: '',
          time: '08 : 00 am',
          message: '',
        });
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending email');
    }
  };

  return (
    <>
      {/* Review Section */}
      <section className='review-client'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 review-slider'>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={false}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 1 },
                }}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className='slide-content'>
                      <div className='quotes'>”</div>
                      <div className='text quote-text'>{slide.title}</div>
                      <div className='quote-author'>{slide.author}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className='bookform' id='reservation'>
        <div className='container'>
          <div className='row bookrow'>
            <div className='col-lg-8 bookrow8'>
              <div className='reserv-col'>
                <div className='inner'>
                  <div className='title'>
                    <h2>Online Reservation</h2>
                    <div className='request-info'>
                      Booking request{' '}
                      <a href='tel:+49 30 48481787'>+49 30 48481787</a> or fill
                      out the order form
                    </div>
                  </div>

                  <div className='default-form reservation-form'>
                    <form onSubmit={handleSubmit}>
                      <div className='row clearfix'>
                        <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                          <div className='field-inner'>
                            <input
                              type='text'
                              name='name'
                              placeholder='Your Name'
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className='form-group col-lg-6 col-md-6 col-sm-12'>
                          <div className='field-inner'>
                            <input
                              type='text'
                              name='phone'
                              placeholder='Phone Number'
                              required
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className='form-group col-lg-4 col-md-6 col-sm-12'>
                          <div className='field-inner'>
                            <select
                              className='l-icon'
                              name='persons'
                              value={formData.persons}
                              onChange={handleChange}
                            >
                              {[...Array(7)].map((_, i) => (
                                <option key={i + 1} value={`${i + 1} Person`}>
                                  {i + 1} Person
                                </option>
                              ))}
                            </select>
                            <span className='arrow-icon far fa-angle-down'></span>
                          </div>
                        </div>

                        <div className='form-group col-lg-4 col-md-6 col-sm-12'>
                          <div className='field-inner'>
                            <input
                              className='l-icon datepicker'
                              type='date'
                              name='date'
                              required
                              value={formData.date}
                              onChange={handleChange}
                            />
                            <span className='arrow-icon far fa-angle-down'></span>
                          </div>
                        </div>

                        <div className='form-group col-lg-4 col-md-12 col-sm-12'>
                          <div className='field-inner'>
                            <select
                              className='l-icon'
                              name='time'
                              value={formData.time}
                              onChange={handleChange}
                            >
                              {[
                                '08 : 00 am',
                                '09 : 00 am',
                                '10 : 00 am',
                                '11 : 00 am',
                                '12 : 00 pm',
                                '01 : 00 pm',
                                '02 : 00 pm',
                                '03 : 00 pm',
                                '04 : 00 pm',
                                '05 : 00 pm',
                                '06 : 00 pm',
                                '07 : 00 pm',
                                '08 : 00 pm',
                                '09 : 00 pm',
                                '10 : 00 pm',
                              ].map((time, index) => (
                                <option key={index} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                            <span className='arrow-icon far fa-angle-down'></span>
                          </div>
                        </div>

                        <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                          <div className='field-inner'>
                            <textarea
                              name='message'
                              placeholder='Message'
                              required
                              value={formData.message}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className='form-group col-lg-12 col-md-12 col-sm-12'>
                          <div className='field-inner text-center'>
                            <button
                              type='submit'
                              className='button-first button-sec btn-main'
                            >
                              Book a Table{' '}
                              <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 bookrow4'>
              <div className='info-col'>
                <div className='inner'>
                  <div className='title'>
                    <h2>Contact Us</h2>
                  </div>

                  <div className='data'>
                    <div className='booking-info'>
                      <div className='bk-title'>Booking request</div>
                      <div className='bk-no'>
                        <a href='tel:+49 30 48481787'>+49 30 48481787</a>
                      </div>
                    </div>

                    <div className='separator'>
                      <span></span>
                    </div>

                    <ul className='info'>
                      <li>
                        <strong>Location</strong>
                        <br />
                        Friedbergstraße 38, 14057 Berlin, Germany
                      </li>
                      <li>
                        <strong>Time</strong>
                        <br />
                        Monday to Thursday <br />
                        12.00 - 11.30pm
                      </li>
                      <li>
                        Friday to Saturday <br />
                        12.00 - 11.45pm
                      </li>
                      <li>
                        Sunday <br />
                        12.00 - 11.00pm
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
