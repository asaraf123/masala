'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faArrowRight,
  faEnvelope,
  faPhone,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
  // Core values from your existing ValuesSection component
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    // Optionally reset the form
    // setFormData({ name: "", phone: "", persons: "1 Person", date: "", time: "08 : 00 am", message: "" });
  };

  return (
    <>
      <section className='main-title-section-wrapper aligncenter'>
        <div className='main-title-section-container'>
          <div className='container'>
            <div className='main-title-section'>
              <h1>Contact Us</h1>
            </div>
            <div className='breadcrumb'>
              <a href='https://brewhub.wpengine.com/'>Home</a>
              <span className='breadcrumb-default-delimiter'></span>
              <span className='current'>Contact Us</span>
            </div>{' '}
          </div>
        </div>
        <div className='main-title-section-bg'></div>
      </section>
      <section className='spaec-60'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title'>
                <h2 className='text-center'>Our Head Office</h2>
              </div>
            </div>
          </div>
          <div className='row space-40'>
            <div className='col-lg-3 broder1'>
              <div className='addres-box'>
                <div className='address-icon'>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                </div>
                <div className='address-content'>
                  <h3>Address</h3>
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 broder1'>
              <div className='addres-box'>
                <div className='address-icon'>
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                </div>
                <div className='address-content'>
                  <h3>Contact Number</h3>
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 broder1'>
              <div className='addres-box '>
                <div className='address-icon'>
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <div className='address-content'>
                  <h3>Email</h3>
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 '>
              <div className='addres-box'>
                <div className='address-icon'>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                </div>
                <div className='address-content'>
                  <h3>Opening Hours</h3>
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </div>
              </div>
            </div>
          </div>

          <div className='row space-40'>
            <div className='col-lg-5'>
              <div className='contact-box'>
                <div className='section-title contact-box-border'>
                  <h2>Our Head Office</h2>
                  <p>
                    Ullamcorper ullamcorper tempus pulvinar primis faucibus
                    suspendisse feugiat ac. Mauris tellus convallis laoreet
                    quam, maximus nulla.Ut porttitor ipsum fusc. tempus pulvinar
                    primis faucibus suspendisse.
                  </p>
                </div>
                <div className='contact-sect'>
                  <div className='contact-sect-main'>
                    <h3>Available Hours</h3>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faStar} /> BreakFast: 7 AM to 10
                        AM
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} /> Lunch: 12 PM to 3 PM
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} /> Dinner: 7 PM to 11 PM
                      </li>
                    </ul>
                  </div>

                  <div className='contact-sect-main'>
                    <h3>For Enquiry</h3>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faPhone} /> (+21) 0254 125 145
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPhone} /> (+21) 0254 125 135
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        contact@example.com
                      </li>
                    </ul>
                  </div>
                </div>{' '}
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='reserv-col reserv-col2'>
                <div className='inner'>
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

                        <div className='form-group form-group1 col-lg-12 col-md-12 col-sm-12'>
                          <div className='field-inner text-center'>
                            <button
                              type='submit'
                              className='button-first btn-main'
                            >
                              book a table{' '}
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
          </div>
        </div>
      </section>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.537299229231!2d-76.6142428!3d39.2987427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8049765e14a59%3A0xdc8161350711f86e!2sSciTechSyndicate!5e0!3m2!1sen!2sin!4v1747492598268!5m2!1sen!2sin'
          // allowfullscreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
