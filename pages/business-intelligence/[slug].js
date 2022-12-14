import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer2 from "../../components/Footer2";

export default function Business() {
  return (
    <>
      <Head>
        <title>Business Intelligence</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/pen.ico" />
      </Head>

      <Navbar />
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content">
            <h2>Business Intelligence & Analytics Software</h2>
            <ul>
              <li>
                <a href="../index.html">Home</a>
              </li>
              <li>Business Intelligence & Analytics Software</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src="/img/anly.png"
                    alt="Image"
                    width={856}
                    height={475}
                  />
                </div>
                <h3>Business Intelligence & Analytics Software</h3>
                <p>
                  Transform data into actionable intelligence that advise an
                  organization`s strategic and vital business decisions.
                </p>
                <p>
                  The Business Intelligence & Analytics Software tools access
                  and evaluate data sets and present analytical findings in
                  reports, summaries, dashboards, graphs, charts, and maps to
                  provide users with detailed intelligence about the position of
                  the business.
                </p>
                <p>
                  The Business Intelligence & Analytics has all round exposure
                  to Assurance Services, Analytics Services, Strategic Planning,
                  People Skill Assessment, Business process expertise, Change
                  Management, and Risk Monitoring. Our BI & Analytics approach
                  meets the dual demands of business and IT by combining all
                  data, all people, and all BI disciplines in one user
                  interface. The modular, scalable, standards based Business
                  Intelligence & Analytics software architecture furnishes the
                  supple required to easily deploy in any environment
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar-area">
                <div className="service-list">
                  <h3 className="service-details-title">Services</h3>
                  <ul>
                    <li>
                      <Link href="/it-security/1/">
                        <a>
                          IT Security
                          <i className="bx bx-check" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/it-consultancy/1">
                        <a>
                          IT Consultancy
                          <i className="bx bx-check" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/enterprise-management/1">
                        <a>
                          Enterprise Managment
                          <i className="bx bx-check" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/business-intelligence/1">
                        <a>
                          Business Intelligence
                          <i className="bx bx-check" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="service-list">
                  <h3 className="service-details-title">Contact Info</h3>
                  <ul>
                    <li>
                      0779 249 673 / 0787 490 605
                      <i className="bx bx-phone-call bx-rotate-270" />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="__cf_email__"
                        data-cfemail="bdd5d8d1d1d2fdd7c8d0cdc593ded2d0"
                      >
                        info@piasysug.com
                      </a>
                      <i className="bx bx-envelope" />
                    </li>
                    <li>
                      3 Floor, Shumuk Building
                      <i className="bx bx-location-plus" />
                    </li>
                    <li>
                      9:00 AM - 5:00 PM
                      <i className="bx bx-time" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
