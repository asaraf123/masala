"use client";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight,  
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPageDetail() {
  return (
    <>
      <section className="main-title-section-wrapper aligncenter">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>Custom Meal Plans & Weekly Tiffin</h1>
            </div>
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Custom Meal Plans & Weekly Tiffin</span>
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
                <h3>Custom Meal Plans & Weekly Tiffin by Masala Restaurant</h3>
                <h4>Home-Style Indian Meals, Made Just for You</h4>
                <p>
                Busy lifestyle? No time to cook? Stay nourished with Masala Restaurant’s weekly tiffin service and personalized Indian meal plans. Perfect for students, working professionals, and health-conscious individuals, our meals are freshly prepared daily and delivered right to your doorstep.
                </p>
                <p>
               Choose from vegetarian, non-vegetarian, low-oil, and diet-specific options to suit your taste and nutritional needs.
                </p>

                <h3>Why It Works:</h3>
                <ul>
                  <li>Affordable and healthy Indian tiffin service</li>
                  <li>Flexible weekly or monthly meal plans</li>
                  <li>Fresh ingredients and hygienic packaging</li>
                  <li>On-time delivery across [City/Location]</li>
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
