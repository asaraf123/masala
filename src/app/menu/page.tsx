"use client";
import { menuData } from "./menuData"; // Adjust path as needed
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function MenuPage() {
  return (
    <>
      {/* Static Banner */}
      <section className="main-title-section-wrapper aligncenter menubg-img">
        <div className="main-title-section-container">
          <div className="container">
            <div className="main-title-section">
              <h1>Menu</h1>
            </div>
            <div className="breadcrumb">
              <a href="#">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Menu</span>
            </div>
          </div>
        </div>
        <div className="main-title-section-bg"></div>
      </section>

      {/* Dynamic Menu Sections */}
      <section className="spaec-60 menu-page">
        <div className="container-fluid">
          {menuData.map((section, index) => (
            <div key={section.id} className="row space-60">
              {/* Alternate image and content positions */}
              {index % 2 === 0 ? (
                <>
                  <div className="col-lg-6">
                    <div className="menuleft">
                      <div className="table-title">
                        <h2>{section.title}</h2>
                      </div>
                      <div className="menuleft-img">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={694}
                          height={416}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={`menu-right menubg1 menu-right-${index}`}>
                      <div className="menu-bg-pattern1">
                        <img src={section.patternImage} alt="" />
                      </div>
                      <div className="menu-ttile">
                        <h3>{section.title}</h3>
                      </div>
                      <div className="menucontainer">
                        {section.items.map((item, i) => (
                          <div key={i} className="menurow1">
                            <div className="menucol-start">
                              <span>{item.name}</span>
                              <p>{item.description}</p>
                            </div>
                            <div className="menucol-middle">
                              <span></span>
                            </div>
                            <div className="menucol-end">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-6">
                    <div className={`menu-right menubg1 menu-right-${index}`}>
                      <div className="menu-bg-pattern1">
                        <img src={section.patternImage} alt="" />
                      </div>
                      <div className="menu-ttile">
                        <h3>{section.title}</h3>
                      </div>
                      <div className="menucontainer">
                        {section.items.map((item, i) => (
                          <div key={i} className="menurow1">
                            <div className="menucol-start">
                              <span>{item.name}</span>
                              <p>{item.description}</p>
                            </div>
                            <div className="menucol-middle">
                              <span></span>
                            </div>
                            <div className="menucol-end">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="menuleft">
                      <div className="table-title">
                        <h2>{section.title}</h2>
                      </div>
                      <div className="menuleft-img">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={694}
                          height={416}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reserve Button */}
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
