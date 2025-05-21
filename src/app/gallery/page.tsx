"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
  const images = [
    '/images/gallery-img1.jpg',
    '/images/gallery-img2.jpg',
    '/images/gallery-img3.jpg',
    '/images/gallery-img4.jpg',
    '/images/gallery-img1.jpg',
    '/images/gallery-img2.jpg',
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
              <h1>Gallery</h1>
            </div>
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-default-delimiter"></span>
              <span className="current">Gallery</span>
            </div>{" "}
          </div>
        </div>
        <div className="main-title-section-bg"></div>
      </section>

      <section className="spaec-60">
        <div className="container-fluid">
          <div className="row">
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
