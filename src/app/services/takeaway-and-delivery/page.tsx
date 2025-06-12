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
      <section className="main-title-section-wrapper serinner2-img  aligncenter">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>Takeaway & Delivery</h1>
            </div>
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Takeaway & Delivery</span>
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
                <h3>Takeaway & Delivery from Masala Restaurant</h3>
                <h4>Delicious Indian Meals, Ready When You Are</h4>
                <p>
                Craving Indian food on the go? Masala Restaurant’s takeaway and delivery services bring your favorite dishes right to your doorstep—hot, fresh, and full of flavor. Whether it’s a quick lunch, a cozy dinner, or a family feast, our meals are carefully packaged to preserve taste and aroma.
                </p>
                <p>
                Order online or call us for a smooth and speedy service that guarantees satisfaction with every bite.
                </p>

                <h3>Why Choose Us:</h3>
                <ul>
                  <li>Fast, reliable Indian food delivery</li>
                  <li>Secure, eco-friendly packaging</li>
                  <li>Easy online ordering via website and apps</li>
                  <li>Available across [City/Service Areas]</li>
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
