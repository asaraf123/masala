"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faEnvelope,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  return (
    <>
      <section className="main-title-section-wrapper aligncenter servicebg-img">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>Services</h1>
            </div>
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Services</span>
            </div>{" "}
          </div>
        </div>
        <div className="main-title-section-bg"></div>
      </section>
      <section className="spaec-60 service-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="ser-img">
                <Image
                  src="/images/servive-img.jpg"
                  alt="About Us"
                  width={490}
                  height={610}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ser-content">
                <div className="ser-content-col">
                  <div className="ser-content-col-img">
                    <Image
                      src="/images/ser-img1.jpg"
                      alt="About Us"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="ser-content-col-img-con">
                    <h3><a href="/services/dine-in-experience">Dine-In Experience</a></h3>
                    <p>
                     At Masala Restaurant, we invite you to indulge in a truly unforgettable dine-in experience. Enjoy the rich, vibrant flavors of traditional Indian cuisine in a cozy, elegantly designed setting. Whether you're planning a casual lunch, romantic dinner
                    </p>
                    <div className="seemore-btn-row">
                       <Link href="/services/dine-in-experience" className="seemore-btn">
                      See more
                    </Link>
                    </div>
                   
                  </div>
                </div>
                <div className="ser-content-col">
                  <div className="ser-content-col-img">
                    <Image
                      src="/images/ser-img2.jpg"
                      alt="About Us"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="ser-content-col-img-con">
                    <h3><a href="/services/takeaway-and-delivery">Takeaway & Delivery</a></h3>
                    <p>
                      Craving Indian food on the go? Masala Restaurant’s takeaway and delivery services bring your favorite dishes right to your doorstep—hot, fresh, and full of flavor. Whether it’s a quick lunch, a cozy dinner, or a family feast
                    </p>
                    <div className="seemore-btn-row">
                       <Link href="/services/takeaway-and-delivery" className="seemore-btn">
                      See more
                    </Link>
                    </div>
                   
                  </div>
                </div>
                <div className="ser-content-col">
                  <div className="ser-content-col-img">
                    <Image
                      src="/images/ser-img3.jpg"
                      alt="About Us"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="ser-content-col-img-con">
                    <h3><a href="/services/custom-meal-plans-and-weekly-tiffin-service">Custom Meal Plans & Weekly Tiffin Service</a></h3>
                    <p>
                      Busy lifestyle? No time to cook? Stay nourished with Masala Restaurant’s weekly tiffin service and personalized Indian meal plans. Perfect for students, working professionals, and health-conscious individuals, our meals are freshly prepared daily
                    </p>
                    <div className="seemore-btn-row">
                       <Link href="/services/custom-meal-plans-and-weekly-tiffin-service" className="seemore-btn">
                      See more
                    </Link>
                    </div>
                   
                  </div>
                </div>
                <div className="ser-content-col">
                  <div className="ser-content-col-img">
                    <Image
                      src="/images/ser-img4.jpg"
                      alt="About Us"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="ser-content-col-img-con">
                    <h3><a href="/services/events-and-catering">Events & Catering</a></h3>
                    <p>
                     Planning a special event? Let Masala Restaurant take care of the food with our exceptional Indian catering services. From weddings and birthdays to corporate events and private parties, we provide custom menus, live counters
                    </p>
                    <div className="seemore-btn-row">
                       <Link href="/services/events-and-catering" className="seemore-btn">
                      See more
                    </Link>
                    </div>
                   
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
