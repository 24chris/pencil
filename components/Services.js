import Link from "next/link";
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="features-area features-area-inner-style ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <i className="flaticon-cloud-computing-1" />
              <h3>Software Development</h3>
              <p>
                We develop enterprise web, mobile, and desktop applications
                using the latest technologies through a holistic, immersive,
                agile process.
              </p>
              <Link href="/software-development/1/">
              <a
                className="read-more-icon"
                
              >
                <span className="flaticon-right-arrow" />
              </a>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <i className="flaticon-shield" />
              <h3>IT Security</h3>
              <p>
                Our strategic approach to security products and solutions in the
                African market focuses on your most critical assets.
              </p>
              <Link href="/it-security/1/">
              <a
                className="read-more-icon"
                
              >
                <span className="flaticon-right-arrow" />
              </a>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <i className="flaticon-success" />
              <h3>IT Consultancy</h3>
              <p>
                We render IT consulting services to help you nail any of these
                challenges in the plethora of available architecture options and
                technologies
              </p>
              <Link href="/it-consultancy/1">
              <a
                className="read-more-icon"
                
              >
                <span className="flaticon-right-arrow" />
              </a>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <i className="flaticon-technical-support" />
              <h3>Business Intelligence</h3>
              <p>
                Transform data into actionable intelligence that advise an
                organization`s strategic and vital business decisions.
              </p>
              <Link href="/business-intelligence/1">
              <a
                className="read-more-icon"
                
              >
                <span className="flaticon-right-arrow" />
              </a>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <i className="flaticon-engineer" />
              <h3>Fleet Service Management</h3>
              <p>
                This is a GPS and GSM-based Vehicle Tracking and Fleet
                Monitoring System.Transform data into actionable intelligence.
              </p>
              <Link href="/fleet-service-management/1">
              <a
                className="read-more-icon"
                
              >
                <span className="flaticon-right-arrow" />
              </a>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <i className="flaticon-success" />
              <h3>Enterprise Management Solutions</h3>
              <p>
                Our Enterprise Software Solutions aim to improve
                effeciency,productivity and business functionality regardless of
                the size.
              </p>
              <Link href="/enterprise-management/1">
              <a
                className="read-more-icon"
                
              >
                <span className="flaticon-right-arrow" />
              </a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

383838
