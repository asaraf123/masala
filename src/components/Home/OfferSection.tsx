"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function OfferSection() {
  return (
    <section className="spaec-60">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="text-center">We Offer Top Notch</h2>
            </div>
          </div>
        </div>

        <div className="row space-40">
          <div className="col-lg-3 offer-box-space">
            <div className="offer-box">
              <div className="offer-image">
                <Image
                  src="/images/breakfast.jpg"
                  alt="About Us"
                  width={285}
                  height={336}
                />
              </div>
              <h3> Breakfast</h3>
            </div>
          </div>
          <div className="col-lg-3 offer-box-space offer-mr">
            <div className="offer-box">
              <div className="offer-image">
                <Image
                  src="/images/lunch.jpg"
                  alt="About Us"
                  width={285}
                  height={336}
                />
              </div>
              <h3> Lunch</h3>
            </div>
          </div>
          <div className="col-lg-3 offer-box-space ">
            <div className="offer-box">
              <div className="offer-image">
                <Image
                  src="/images/snacks.jpg"
                  alt="About Us"
                  width={285}
                  height={336}
                />
              </div>
              <h3> Snacks</h3>
            </div>
          </div>
          <div className="col-lg-3 offer-box-space offer-mr">
            <div className="offer-box">
              <div className="offer-image">
                <Image
                  src="/images/dinner.jpg"
                  alt="About Us"
                  width={285}
                  height={336}
                />
              </div>
              <h3> Dinner</h3>
            </div>
          </div>
        </div>
        <div className="offertext">
           <h3>Delicious Food, Fresh Ingredients, Crafted with Love, Satisfy Your Cravings!</h3>
        </div>
        <div
          className="about-content-btn wow fadeInUp text-center1"
          data-wow-delay="0.6s"
        >
         
          <Link href="/contact" className="button-first btn-main">
            Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
}
