import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer2() {
 
  return (
    <>
        <footer className="footer-top-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-widget">
              <a href="../index.html" className="logo">
                <Image src="/img/pencil.png" height={80} width={152} alt="Image" />
              </a>
              <p>
                Pencil systems Uganda limited boasts a plethora of highly 
                trained and creative, skilled, multi-talented, and experienced 
                software Developers.
              </p>
              <ul className="social-icon">
                <li>
                  <a href="#" >
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-pinterest-alt" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-widget">
              <h3>Services</h3>
              <ul>
                <li>

                  <Link href="/software-development/1/">
                  <a >
                    <i className="right-icon bx bx-chevrons-right" />
                    Software Development
                  </a>
                  </Link>
                  
                </li>
                <li>
                  <Link href="/it-security/1/">
                  <a >
                    <i className="right-icon bx bx-chevrons-right" />
                    IT Security
                  </a>
                  </Link>
                  
                </li>
                <li>
                  <Link href="/it-consultancy/1">
                  <a >
                    <i className="right-icon bx bx-chevrons-right" />
                    IT Consultancy
                  </a>
                  </Link>
                  
                </li>
                <li>
                  <Link href="/business-intelligence/1">
                  <a >
                    <i className="right-icon bx bx-chevrons-right" />
                    Business Intelligence
                  </a>
                  </Link>
                  
                </li>
                <li>
                  <Link href="/fleet-service-management/1">
                  <a >
                    <i className="right-icon bx bx-chevrons-right" />
                    Fleet Service Management
                  </a>
                  </Link>
                  
                </li>
                <li>
                  <Link href="/enterprise-management/1">
                  <a >
                    <i className="right-icon bx bx-chevrons-right" />
                    Enterprise Management Solutions
                  </a>
                  </Link>
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-widget">
              <h3>Important Links</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="right-icon bx bx-chevrons-right" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="right-icon bx bx-chevrons-right" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="right-icon bx bx-chevrons-right" />
                    Our Values
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="right-icon bx bx-chevrons-right" />
                    Team
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="right-icon bx bx-chevrons-right" />
                    Support
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="right-icon bx bx-chevrons-right" />
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-widget">
              <h3>Information</h3>
              <ul className="information">
                <li className="address">
                  <i className="flaticon-call" />
                  <span>Phone</span>0779 249 673 / 0787 490 605
                </li>
                <li className="address">
                  <i className="flaticon-envelope" />
                  <span>Email</span>
                  <a
                    href="../cdn-cgi/l/email-protection.html"
                    className="__cf_email__"
                    data-cfemail="244c4148484b644e5149545c0a474b49"
                  >
                    {/* [email&nbsp;protected] */}
                    info@piasysug.com /info@pencil.co.ug 
                  </a>
                </li>
                <li className="address">
                  <i className="flaticon-maps-and-flags" />
                  <span>Address</span>3 Floor, Shumuk Building,<br/> 
                        UMA Show Grounds, Lugogo <br/>
                        Kampala, Uganda
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shape">
        <img src="/culture/shape/footer-shape-one.png" alt="Image" />
        <img src="/culture/shape/footer-shape-two.png" alt="Image" />
      </div>
    </footer>
    <footer className="footer-bottom-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            
          </div>
          <div className="col-lg-5">
          <div className="copy-right">
              <p>
                Copyright ©  {new Date().getFullYear()}. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
