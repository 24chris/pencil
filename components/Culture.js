import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../public/img/hero.png";
import styles from "../styles/Home.module.css";

export default function Culture() {
  return (
    <>
      <section className="choose-ue-area pb-100">
        <div className="container">
          <div className="row">
            <div className="section-title">
              {/* <span>Our Culture</span> */}
              <h2>Why Choose Us</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li>
                    <span>
                      01 <i className="flaticon-technical-support" />
                    </span>
                    <h3>Our Vision</h3>
                    <p>To Become a LeadingTechnology Innovations Partner.</p>
                  </li>
                  <li className="ml">
                    <span>
                      02 <i className="flaticon-shield" />
                    </span>
                    <h3>Our Mission</h3>
                    <p>
                      To Embrace partnerships, innovation, and research to
                      provide bespoke ICT solutions that meet requirements for
                      organizations, making life easy.
                    </p>
                  </li>
                  <li className="ml-25">
                    <span>
                      03 <i className="flaticon-support" />
                    </span>
                    <h3>Our Values</h3>
                    <p>
                    Our rule is the secrecy with customers` documents. We work hard to earn your trust by anticipating your needs and faithfully protecting your time and documents.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-img">
                <Image src="/img/core-values2.png" alt="Image" width={636} height={582} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
