import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer2 from '../components/Footer2'



export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navbar/>
     <div className="page-title-area item-bg1">
      <div className="container">
        <div className="page-title-content">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="contact-info-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-contact-info">
              <i className="bx bx-envelope" />
              <h3>Email Us:</h3>
              <p>
                <a href="#">
                  <span
                    className="__cf_email__"
                    data-cfemail="d1b9b4bdbdbe91bba4bca1a9ffb2bebc"
                  >
                    info@piasysug.com
                  </span>
                </a>
              </p>
              <p>
                <a href="#">
                  <span
                    className="__cf_email__"
                    data-cfemail="8ae3e4ece5cae0ffe7faf2a4e9e5e7"
                  >
                    info@pencil.co.ug
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-contact-info">
              <i className="bx bx-phone-call" />
              <h3>Call Us:</h3>
              <p>
                Tel. <a href="tel:12318005678990">0779 249 673 </a>
              </p>
              <p>
                Tel. <a href="tel:12415235679874">0787 490 605</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-contact-info">
              <i className="bx bx-location-plus" />
              <h3>Kampala, Uganda</h3>
              <p>3 Floor, Shumuk Building</p><p> UMA Show Grounds, Lugogo</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-contact-info">
              <i className="bx bx-support" />
              <h3>Business Hours</h3>
              <p>Monday - Friday:- 9am to 5pm</p>
              <p>Saturday:- 9am to 2pm</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="main-contact-area pb-100">
      <div className="container">
        <div className="contact-wrap contact-pages mb-0">
          <div className="contact-form">
            <div className="section-title">
              <h2>Drop us a message for any query</h2>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      required=""
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      required=""
                      defaultValue=""
                    />
                  </div>
                </div>
                
                <div className="col-lg-12 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      required=""
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols={30}
                      rows={6}
                      placeholder="Write your message..."
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="default-btn btn-two">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer2/>

     </>
  )
}
