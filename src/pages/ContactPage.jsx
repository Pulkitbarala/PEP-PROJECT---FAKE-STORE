import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Right Side - Contact Info */}
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="bg-light p-4 shadow rounded">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Contact Information
                </h2>
                <p className="text-muted mb-4 text-center">
                  Feel free to contact us through any of the following methods:
                </p>

                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className="fas fa-phone-alt text-muted mr-2"></i>
                    <span className="text-muted">+1 234 567 890</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className="fas fa-envelope text-muted mr-2"></i>
                    <span className="text-muted">support@fakestore.com</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className="fas fa-map-marker-alt text-muted mr-2"></i>
                    <span className="text-muted">
                      123 Fake Street, New York, NY 10001
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Follow Us
                </h3>
                <div className="d-flex justify-content-center">
                  <a href="#" className="text-muted mx-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-muted mx-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-muted mx-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-muted mx-2">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;
