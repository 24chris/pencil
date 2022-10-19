import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer2 from '../../components/Footer2'


export default function Fleet() {
  return (
    <>
      <Head>
        <title>Fleet Service Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/pen.ico" />
      </Head>

     <Navbar/>
     <div className="page-title-area item-bg1">
      <div className="container">
        <div className="page-title-content">
          <h2>Fleet Service Management</h2>
          <ul>
            <li>
              <a href="../index.html">Home</a>
            </li>
            <li>Fleet Service Management</li>
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
                  src="/img/fleet.png"
                  alt="Image"
                  width={856}
                    height={475}
                />
              </div>
              <h3>Fleet Management Simplified</h3>
              <p>
              This is a GPS and GSM-based Vehicle Tracking 
and Fleet Monitoring System.
              </p>
              <p>
              Transform data into actionable intelligence that advise an organization`s strategic and vital business
decisions.
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
                    <a >
                      IT Security
                      <i className="bx bx-check" />
                    </a>
                    </Link>
                    
                  </li>
                  <li>
                    <Link href="/it-consultancy/1">
                    <a >
                      IT Consultancy
                      <i className="bx bx-check" />
                    </a>
                    </Link>
                    
                  </li>
                  <li>
                    <Link href="/enterprise-management/1">
                    <a >
                      Enterprise Managment
                      <i className="bx bx-check" />
                    </a>
                    </Link>
                    
                  </li>
                  <li>
                    <Link href="/business-intelligence/1">
                    <a >
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
    <Footer2/>

     </>
  )
}