"use client";

import Link from "next/link";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faEnvelope,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const images = [
    "/images/gallery-img1.jpg",
    "/images/gallery-img2.jpg",
    "/images/gallery-img3.jpg",
    "/images/gallery-img4.jpg",
    "/images/gallery-img1.jpg",
    "/images/gallery-img2.jpg",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src }));
  return (
    <>
      <section className="main-title-section-wrapper aligncenter">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>About</h1>
            </div>
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">About</span>
            </div>{" "}
          </div>
        </div>
        <div className="main-title-section-bg"></div>
      </section>
      <section className="spaec-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Our Story</h2>
                <span>A Culinary Journey Born from Spices and Stories</span>

                <p>
                  At Masala Berlin, we don’t just cook — we tell stories. Since
                  2003, our mission has been to bring the magic of Indian
                  flavors to the heart of Berlin.
                </p>
                <p>
                  Our dishes are crafted with care, using time-honored recipes
                  and bold masalas that carry the spirit of India. We invite you
                  to share in this journey — where every bite is a memory, and
                  every meal a celebration.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutimg">
                <img src="/images/aboutimg.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spaec-60 bglight">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutimg">
                <img src="/images/aboutimg.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content about-contentspace">
                <h2>Antje Gill – The Heart of Masala Berlin</h2>
                <p>
                  In the culinary symphony of Masala Berlin, **Antje Gill** is
                  the guiding hand behind every flavor.
                </p>

                <p>
                  Drawing from his Indian roots, Antje infuses every dish with
                  emotion, memory, and creativity. His passion lies in telling
                  stories through food — creating a bridge between cultures, one
                  plate at a time.
                </p>
                <p>
                  His leadership has made Masala Berlin not just a restaurant,
                  but a **culinary destination**, beloved by locals and
                  travelers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spaec-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="text-center">What We Believe</h2>
              </div>
            </div>
          </div>
          <div className="row space-40">
            <div className="col-lg-4">
              <div className="whybox">
                <img src="/images/why-icon1.png" alt="" />
                <h3>Food is a Celebration</h3>
                <p>
                  We celebrate heritage, culture, and joy through every dish.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="whybox">
                <img src="/images/why-icon2.png" alt="" />
                <h3>Spices Speak Truth</h3>
                <p>
                  Authentic flavors are crafted from the finest ingredients and
                  bold masalas.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="whybox">
                <img src="/images/why-icon3.png" alt="" />
                <h3>Hospitality from the Heart</h3>
                <p>
                  Every guest is family. You’re always welcome at our table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spaec-60 bglight">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="text-center">Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row space-40">
            {images.map((src, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card">
                  <img
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    className="card-img-top"
                    onClick={() => {
                      setIndex(idx);
                      setOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className="about-content-btn wow fadeInUp text-center1"
            data-wow-delay="0.6s"
          >
            <Link href="/gallery" className="button-first btn-main">
              View All <FontAwesomeIcon icon={faArrowRight} />
            </Link>
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

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      )}
    </>
  );
}
