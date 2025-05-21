"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function MenuSection() {
  const menuTabs = [
    { id: "tab-1", title: "MORNING" },
    { id: "tab-2", title: "WEEKDAY LUNCH" },
    { id: "tab-3", title: "DINNER" },
    { id: "tab-4", title: "WINES" },
  ];

  const menuItems = [
    {
      tab: "tab-1",
      dishes: [
        {
          title: "Greek Salad",
          price: "$25.50",
          desc: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
          image: "/images/menu-image-5.png",
        },
        {
          title: "Lasagne",
          price: "$40.00",
          desc: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
          label: "SEASONAL",
          image: "/images/menu-image-8.png",
        },
        {
          title: "Butternut Pumpkin",
          price: "$10.00",
          desc: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
          image: "/images/menu-image-7.png",
        },
      ],
    },
    {
      tab: "tab-2",
      dishes: [
        {
          title: "Tokusen Wagyu",
          price: "$39.00",
          desc: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
          label: "NEW",
          image: "/images/menu-image-8.png",
        },
        {
          title: "Olivas Rellenas",
          price: "$25.00",
          desc: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
          image: "/images/menu-image-9.png",
        },
        {
          title: "Opu Fish",
          price: "$49.00",
          desc: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
          image: "/images/menu-image-10.png",
        },
      ],
    },
    // You can replicate tab-3 and tab-4 as needed
  ];
  const [activeTab, setActiveTab] = useState("tab-1");
  return (
    <section className="spaec-60 bglight">
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
                .map((section) => (
                  <div key={section.tab} className="tab active-tab">
                    <div className="row  g-4">
                      <div className="col-lg-6 menu-col">
                        <div className="inner">
                          {section.dishes.map((dish, index) => (
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
                                  <div className="title ">
                                    <h5 >
                                      {dish.title}{" "}
                                      
                                    </h5>
                                    <div className="price">
                                      {dish.price}
                                    </div>
                                  </div>
                                  <div className="text desc">
                                    {dish.desc}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-6 menu-col">
                        <div className="inner">
                          {section.dishes.map((dish, index) => (
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
                                  <div className="title ">
                                    <h5 >
                                      {dish.title}{" "}
                                      
                                    </h5>
                                    <div className="price ">
                                      {dish.price}
                                    </div>
                                  </div>
                                  <div className="text desc">
                                    {dish.desc}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="about-content-btn wow fadeInUp text-center1" data-wow-delay="0.6s">
          <Link href="/menu" className="button-first btn-main">
           view all menu <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
