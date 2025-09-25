"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function MenuSection() {
  const menuTabs = [
    { id: "tab-1", title: "INDISCHE VORSPEISEN" },
    { id: "tab-2", title: "SCAMPI SPEZIALITÄTEN" },
    { id: "tab-3", title: "INDISCHE VEGANE" },
    { id: "tab-4", title: "DESSERT" },
  ];

  const menuItems = [
    {
      tab: "tab-1",
      dishes: [
        {
          title: "Onion Bhaji",
          price: "5,90 €",
          desc: "Zwiebelringe paniert in Kichererbsenmehl und frittiert",
          image: "/images/home-menu/1.jpg",
        },
        {
          title: "Samosa Chaat",
          price: "9,90 €",
          desc: "zwei Teigtaschen, gefüllt mit Kartoffeln und Erbsen, dazu Channa Chaat mit Zwiebeln",
          image: "/images/home-menu/2.jpg",
        },
        {
          title: "Gobi Pakoras",
          price: "5,90 €",
          desc: "Blumenkohl, paniert in Kichererbsenmehl und frittiert",
          image: "/images/home-menu/3.jpg",
        },
        {
          title: "Chicken Pakoras",
          price: "6,90 €",
          desc: "Hähnchen, paniert in Kichererbsenmehl und frittiert",
          image: "/images/home-menu/4.jpg",
        },
      ],
    },
    {
      tab: "tab-2",
      dishes: [
        {
          title: "Scampi Jhalfrezi",
          price: "15,90 €",
          desc: "Großgarnelen mit Paprikastreifen, Ingwer, Zwiebeln, Knoblauch und Erbsen in Currysoße",
          image: "/images/home-menu/5.jpg",
        },
        {
          title: "Jhingha Manchurian",
          price: "15,90 €",
          desc: "Frittierte Großgarnelen mit Tomaten, Zwiebeln, Erbsen, Paprika, in süß-saurer Chilisoße zubereitet",
          image: "/images/home-menu/6.jpg",
        },
        {
          title: "Scampi Scuba",
          price: "15,90 €",
          desc: "Großgarnelen, gebraten mit Zwiebeln, Bambus, Karotten, Erbsen und Paprika, abgerundet mit einer Spezial-Austern-Sojasoße (Singapuri)",
          image: "/images/home-menu/7.jpg",
        },
        {
          title: "Scampi Pataya",
          price: "16,50 €",
          desc: "Großgarnelen mit Zucchini und Karotten in einer cremigen Erdnusssoße (Singapuri)",
          image: "/images/home-menu/8.jpg",
        },
      ],
    },
    {
      tab: "tab-3",
      dishes: [
        {
          title: "Mix Sabji",
          price: "12,90 €",
          desc: "Frisches Gemüse mit Ingwer, Knoblauch und frischem Koriander in Currysoße",
          image: "/images/home-menu/9.jpg",
        },
        {
          title: "Bhindi Masala",
          price: "12,90 €",
          desc: "Okraschoten mit Ingwer, Knoblauch in einer würzigen Tomaten- und Zwiebelsauce",
          image: "/images/home-menu/10.jpg",
        },
        {
          title: "Channa Masala",
          price: "11,90 €",
          desc: "Zarte Kichererbsen, langsam gekocht in einer würzigen Tomaten- und Zwiebelsauce mit einer kühnen Mischung aus indischen Gewürzen",
          image: "/images/home-menu/11.jpg",
        },
      ],
    },

    {
      tab: "tab-4",
      dishes: [
        {
          title: "Brownie",
          price: "7,50 €",
          desc: "Saftiger Schokobrownie mit einer knusprigen Kruste und weichem Kern.",
          image: "/images/home-menu/12.jpg",
        },
        {
          title: "Apfelstrudel",
          price: "7,50 €",
          desc: "Warmer Apfelstrudel mit Vanilleeis und cremiger Vanillesoße.",
          image: "/images/home-menu/13.jpg",
        },
        {
          title: "Indisches Eis",
          price: "7,90 €",
          desc: "Mango-, Kokos- oder Vanilleeis",
          image: "/images/home-menu/14.jpg",
        },
      ],
    },
    // You can replicate tab-3 and tab-4 as needed
  ];
  const [activeTab, setActiveTab] = useState("tab-1");
  return (
    <section className="spaec-60 bg-pattern3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="text-center">Delicious Menu</h2>
            </div>
          </div>
        </div>

        <div className="row space-40">
          <div className="tabs-box menu-tabs">
            {/* Tab Buttons */}
            <div className="buttons">
              <ul className="tab-buttons clearfix flex gap-4">
                {menuTabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`tab-btn ${
                      activeTab === tab.id ? "active-btn" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tab Content */}
            <div className="tabs-content">
              {menuItems
                .filter((section) => section.tab === activeTab)
                .map((section) => {
                  // split dishes into two equal parts
                  const mid = Math.ceil(section.dishes.length / 2);
                  const leftDishes = section.dishes.slice(0, mid);
                  const rightDishes = section.dishes.slice(mid);

                  return (
                    <div key={section.tab} className="tab active-tab">
                      <div className="row g-4">
                        {/* Left Column */}
                        <div className="col-lg-6 menu-col">
                          <div className="inner">
                            {leftDishes.map((dish, index) => (
                              <div key={index} className="dish-block">
                                <div className="inner-box flex gap-4">
                                  <div className="dish-image">
                                    <img
                                      src={dish.image}
                                      alt={dish.title}
                                      width={100}
                                      height={100}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <div className="title">
                                      <h5>{dish.title}</h5>
                                      <div className="price">{dish.price}</div>
                                    </div>
                                    <div className="text desc">{dish.desc}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 menu-col">
                          <div className="inner">
                            {rightDishes.map((dish, index) => (
                              <div key={index} className="dish-block">
                                <div className="inner-box flex gap-4">
                                  <div className="dish-image">
                                    <img
                                      src={dish.image}
                                      alt={dish.title}
                                      width={100}
                                      height={100}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div>
                                    <div className="title">
                                      <h5>{dish.title}</h5>
                                      <div className="price">{dish.price}</div>
                                    </div>
                                    <div className="text desc">{dish.desc}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="about-content-btn wow fadeInUp text-center1"
            data-wow-delay="0.6s"
          >
            <Link href="/menu" className="button-first button-sec btn-main">
              view all menu <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
