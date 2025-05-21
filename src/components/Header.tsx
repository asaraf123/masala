"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`navbar header-fixed navbar-expand-lg navbar-light sticky-top main-menu ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="menurow d-flex justify-content-between align-items-center w-100">
          <div className="logo d-flex align-items-center">
            <Link className="navbar-brand" href="/">
              <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/") ? "active" : ""}`} href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/menu") ? "active" : ""}`} href="/menu">Menu</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    pathname.startsWith("/service") ? "active" : ""
                  }`}
                  href="service"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className={`dropdown-item ${isActive("/services/dine-in-experience") ? "active" : ""}`} href="/services/dine-in-experience">Dine-In Experience</Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${isActive("/services/takeaway-and-delivery") ? "active" : ""}`} href="/services/takeaway-and-delivery">Takeaway & Delivery</Link>
                  </li>
                   <li>
                    <Link className={`dropdown-item ${isActive("/services/custom-meal-plans-and-weekly-tiffin-service") ? "active" : ""}`} href="/services/custom-meal-plans-and-weekly-tiffin-service">Custom Meal Plans & Weekly Tiffin Service</Link>
                  </li>
                   <li>
                    <Link className={`dropdown-item ${isActive("events-and-catering") ? "active" : ""}`} href="events-and-catering">Events &Catering</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/gallery") ? "active" : ""}`} href="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="menu-light d-flex align-items-center">
            <ul className="d-flex gap-3 align-items-center list-unstyled mb-0">
              <li>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
                </svg>
              </li>
              <li>
                <Link href="/">
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="languageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                  </svg>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                  <li><Link className="dropdown-item" href="#">English</Link></li>
                  <li><Link className="dropdown-item" href="#">German</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
