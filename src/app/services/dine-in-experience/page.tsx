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

export default function ServicesPageDetail() {
  return (
    <>
      <section className="main-title-section-wrapper aligncenter">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>Dine-In Experience</h1>
            </div>
            <div className="breadcrumb">
              <a href="https://brewhub.wpengine.com/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Dine-In Experience</span>
            </div>{" "}
          </div>
        </div>
        <div className="main-title-section-bg"></div>
      </section>
      <section className="spaec-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ser-detail">
                <h3>Dine-In Experience at Masala Restaurant</h3>
                <h4>Authentic Indian Dining in a Warm, Welcoming Atmosphere</h4>
                <p>
                 At Masala Restaurant, we invite you to indulge in a truly unforgettable dine-in experience. Enjoy the rich, vibrant flavors of traditional Indian cuisine in a cozy, elegantly designed setting. Whether you're planning a casual lunch, romantic dinner, or a family outing, our warm hospitality and aromatic dishes will make every visit special.
                </p>
                <p>
                 Savor classics like butter chicken, paneer tikka, and biryani, all made fresh by our expert chefs using premium ingredients and time-honored recipes.
                </p>

                <h3>What to Expect:</h3>
                <ul>
                  <li>Comfortable seating and inviting ambiance</li>
                  <li>Attentive service and authentic Indian flavors</li>
                  <li>Ideal for families, couples, and group dining</li>
                  <li>Convenient location in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="spaec-60 cta-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content">
                <h2> Ready to taste our story?</h2>
                <div className="cta-btn">
                  <Link href="/contact" className="button-first btn-main">
                    Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <Link href="/menu" className="button-second btn-main">
                   Explore the Menu <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <Link href="/contact" className="button-first btn-main">
                    Contact Us <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
