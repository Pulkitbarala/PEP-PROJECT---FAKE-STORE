import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        padding: "50px 0",
      }}
    >
      <div className="container text-center">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
              FAKESTORE
            </h5>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              Your one-stop shop for all your needs, offering quality products
              at affordable prices.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  Home
                </NavLink>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/product" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  Shop
                </NavLink>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/about" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  About Us
                </NavLink>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/contact" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
              Customer Service
            </h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/faqs" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  FAQ
                </NavLink>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/shipping-returns" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  Shipping & Returns
                </NavLink>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/privacy-policy" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  Privacy Policy
                </NavLink>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <NavLink to="/terms-of-service" style={{ color: "#343a40", textDecoration: "none", fontSize: "0.9rem" }}>
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
              Follow Us
            </h5>
            <div>
              {["facebook", "twitter", "instagram", "linkedin"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: "#343a40",
                    fontSize: "1.4rem",
                    marginRight: "15px",
                  }}
                  className={`fa fa-${icon}`}
                ></a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            borderTop: "1px solid #dee2e6",
            marginTop: "30px",
            paddingTop: "20px",
            fontSize: "0.85rem",
          }}
        >
          &copy; {new Date().getFullYear()} FAKESTORE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
