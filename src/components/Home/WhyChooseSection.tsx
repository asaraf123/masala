"use client";
import Image from "next/image";

export default function OfferSection() {
    const features = [
    {
      title: "Dine-In Experience",
           icon: "/images/ser-icon1.png",
      delay: "0ms",
    },
    {
      title: "Takeaway & Delivery",
           icon: "/images/ser-icon2.png",
      delay: "300ms",
    },
    {
      title: "Custom Meal Plans & Weekly Tiffin Service",
           icon: "/images/ser-icon3.png",
      delay: "600ms",
    },
    {
      title: "Events & Catering",
           icon: "/images/ser-icon4.png",
      delay: "900ms",
    },
  ];
  return (
    <section className="spaec-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="text-center">Our Services</h2>
            </div>
          </div>
        </div>

        <div className="row space-40">
          {features.map((item, index) => (
            <div
              key={index}
              className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
            >
              <div
                className="inner-box wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={item.delay}
              >
                <div className="icon-box">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={80}
                    loading="lazy"
                  />
                </div>
                <h4>{item.title}</h4>
                {/* <p>{item.text}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
