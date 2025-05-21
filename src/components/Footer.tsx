"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; 

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-3">
            <div className="ft-content">
              <h3 className="ft-title">Contacts</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} /> 5 Rue Dalou, 75015 Paris
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <a href="tel:+33156788956">+33 1 56 78 89 56</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a href="mailto:test@mail.com">test@mail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* About and Social */}
          <div className="col-lg-6">
            <div className="about-ft">
              <Image src="/images/logo.png" alt="Logo" width={90} height={90} />
              <p>
                Be the first to know about new collections, special events, and
                what’s going on at our place.
              </p>
              <div className="social-link">
                <Link href="https://facebook.com" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://youtube.com" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="col-lg-3">
            <div className="ft-contact">
              <h3 className="ft-title">Working Hours</h3>
              <ul>
                <li>
                  <span>Mon – Fri:</span> 7.00am – 6.00pm
                </li>
                <li>
                  <span>Sat:</span> 7.00am – 6.00pm
                </li>
                <li>
                  <span>Sun:</span> 8.00am – 6.00pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copywrite text-center mt-4">
        <p>© 2025 Masala. All rights reserved.</p>
      </div>
    </footer>
  );
}
