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
              <h1>Events & Catering</h1>
            </div>
            <div className="breadcrumb">
              <a href="https://brewhub.wpengine.com/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Events & Catering</span>
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
                <h3>Events & Catering by Masala Restaurant</h3>
                <h4>Flavors that Elevate Every Occasion</h4>
                <p>
                  Planning a special event? Let Masala Restaurant take care of
                  the food with our exceptional Indian catering services. From
                  weddings and birthdays to corporate events and private
                  parties, we provide custom menus, live counters, and
                  full-service catering solutions that showcase the best of
                  Indian cuisine.
                </p>
                <p>
                  Trust our experienced culinary team to deliver an
                  unforgettable food experience your guests will talk about for
                  years.
                </p>

                <h3>Services Include:</h3>
                <ul>
                  <li> Indian catering for weddings & large events</li>
                  <li>Buffet setups and live food stations</li>
                  <li>Staffed service and on-site event coordination</li>
                  <li>Tailored menus for all dietary preferences</li>
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
