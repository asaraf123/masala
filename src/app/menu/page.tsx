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

export default function MenuPage() {
  return (
    <>
      <section className="main-title-section-wrapper aligncenter">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>Menu</h1>
            </div>
            <div className="breadcrumb">
              <a href="#">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Menu</span>
            </div>{" "}
          </div>
        </div>
        <div className="main-title-section-bg"></div>
      </section>
      <section className="spaec-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="menuleft">
                <div className="table-title">
                  <h2>Cocktail</h2>
                </div>
                <div className="menuleft-img">
                  <Image
                    src="/images/menu1.jpg"
                    alt="About Us"
                    width={694}
                    height={416}
                  />
                </div>
              </div>
              {/* About Content Buttons Start */}
              {/* <div
                className="about-content-btn menubtn wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link href="/contact" className="button-first btn-main">
                  Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div> */}
              {/* About Content Buttons End */}
            </div>
            <div className="col-lg-6">
              <div className="menu-right menubg1">
                <div className="menu-bg-pattern1">                
                  <img  src="/images/menu-pattern1.png" alt="" />
                </div>
                
                <div className="menu-ttile">
                  <h3>Cocktail</h3>
                </div>
                <div className="menucontainer">
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row space-60">
            
            <div className="col-lg-6">
              <div className="menu-right menubg2">
                {/* <div className="menu-pattern1">
                  <Image
                    src="/images/flower-path-one.png"
                    alt="About Us"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="menu-pattern2">
                  <Image
                    src="/images/flower-path-one.png"
                    alt="About Us"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="menu-pattern3">
                  <Image
                    src="/images/flower-path-one.png"
                    alt="About Us"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="menu-pattern4">
                  <Image
                    src="/images/flower-path-one.png"
                    alt="About Us"
                    width={150}
                    height={150}
                  />
                </div> */}
                <div className="menu-ttile">
                  <h3>Snacks</h3>
                </div>
                <div className="menucontainer">
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="menuleft">
                <div className="table-title">
                  <h2>Snacks</h2>
                </div>
                <div className="menuleft-img">
                  <Image
                    src="/images/menu2.jpg"
                    alt="About Us"
                    width={694}
                    height={416}
                  />
                </div>
              </div>
              {/* About Content Buttons Start */}
              {/* <div
                className="about-content-btn menubtn wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link href="/contact" className="button-first btn-main">
                  Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div> */}
              {/* About Content Buttons End */}
            </div>

          </div>

           <div className="row space-60">
            <div className="col-lg-6">
              <div className="menuleft">
                <div className="table-title">
                  <h2>Chinese Food</h2>
                </div>
                <div className="menuleft-img">
                  <Image
                    src="/images/menu3.jpg"
                    alt="About Us"
                    width={694}
                    height={416}
                  />
                </div>
              </div>
              {/* About Content Buttons Start */}
              {/* <div
                className="about-content-btn menubtn wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link href="/contact" className="button-first btn-main">
                  Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div> */}
              {/* About Content Buttons End */}
            </div>
            <div className="col-lg-6">
              <div className="menu-right menubg3">
                
                <div className="menu-ttile">
                  <h3>Chinese food</h3>
                </div>
                <div className="menucontainer">
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                  <div className="menurow1">
                    <div className="menucol-start">
                      <span>Fluffy Delight Pancakes</span>
                    </div>
                    <div className="menucol-middle">
                      <span></span>
                    </div>
                    <div className="menucol-end">$ 05.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div
                className="about-content-btn menubtn1 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link href="/contact" className="button-first btn-main">
                  Reserve Table! <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
    </>
  );
}
