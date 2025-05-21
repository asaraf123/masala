"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";


export default function AboutSection() {
    useEffect(() => {
    const initWOW = async () => {
      const WOW = (await import("wowjs")).WOW;
      new WOW().init();
    };
    initWOW();
  }, []);


  return (
    <section className="spaec-100 about-us">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-us-image wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-us-img">
                <Image
                  src="/images/about-img.png"
                  alt="About Us"
                  width={420}
                  height={420}
                />
              </div>
              <div className="about-us-pattern">
                <Image
                  src="/images/flower-path-one.png"
                  alt="About Us"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-us-content wow fadeInUp" data-wow-delay="0.4s">
              <div className="section-title">
                <h2>Experience the Rich Flavors of India in Every Bite</h2>
                <p>
                 At Masala Restaurant, we bring the vibrant and diverse taste of Indian cuisine to the heart of Berlin. From aromatic spices to traditional recipes passed down through generations, our menu offers an unforgettable culinary journey that reflects the soul of India. Whether you're craving spicy curries, tandoori delights, or comforting home-style meals, you will find something to love at Masala.
                </p>
                <p>Dine-In | Takeaway | Delivery | Catering | Tiffin Services</p>
              </div>

              {/* <div className="about-content-list wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Seasonal & locally sourced ingredients
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Vegetarian & dietary-friendly options
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Exquisite pairings & unique flavors
                  </li>
                </ul>
              </div> */}

              <div className="about-content-btn wow fadeInUp" data-wow-delay="0.8s">
                <Link href="/contact" className="button-first btn-main">
                  Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link href="/about" className="button-second btn-main">
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-us-right wow fadeInRight" data-wow-delay="0.4s">
              <div className="about-us-pattern1">
                <Image
                  src="/images/flower-path-two.png"
                  alt="About Us"
                  width={260}
                  height={360}
                />
              </div>

              <div className="about-us-right-box">
                <div className="about-col wow fadeInUp" data-wow-delay="0.5s">
                  <a href="/menu">
                    <div className="about-col-img">
                      <Image
                        src="/images/image-menu.jpg"
                        alt="Menu"
                        width={163}
                        height={147}
                      />
                    </div>
                    <h3 className="about-col-content">Menu</h3>
                  </a>
                </div>

                <div className="about-col wow fadeInUp" data-wow-delay="0.7s">
                  <a href="#">
                    <div className="about-col-img">
                      <Image
                        src="/images/image-reservation.jpg"
                        alt="Reservation"
                        width={163}
                        height={147}
                      />
                    </div>
                    <h3 className="about-col-content">Reservation</h3>
                  </a>
                </div>
              </div>

              <div className="about-col about-col2 wow fadeInUp" data-wow-delay="1s">
                <a href="#">
                  <div className="about-col-img">
                    <Image
                      src="/images/image-events.jpg"
                      alt="Events"
                      width={348}
                      height={261}
                    />
                  </div>
                  <h3 className="about-col-content">Events</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
