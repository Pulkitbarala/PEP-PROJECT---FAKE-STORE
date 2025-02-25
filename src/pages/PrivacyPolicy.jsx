import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header with Back Button */}
      <div className="container my-4 d-flex justify-content-between align-items-center" style={{ maxWidth: "900px" }}>
        <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>
          <i className="fa fa-arrow-left me-2"></i>Back
        </button>
        <h1 className="text-center mb-0" style={{ fontWeight: "700" }}>
          Privacy Policy
        </h1>
        <div style={{ width: "80px" }}></div>
      </div>

      {/* Content */}
      <div className="container my-5" style={{ maxWidth: "900px" }}>
        {/* Introduction */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>Introduction</h3>
          <p>
            At FAKESTORE, we are committed to protecting your privacy. This
            policy outlines the types of information we collect, how we use
            it, and the measures we take to ensure your data is secure.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>Information We Collect</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Personal information: Name, email, phone number, and address</li>
            <li className="list-group-item">Payment information: Credit card details and billing address</li>
            <li className="list-group-item">Browsing data: Cookies, IP address, and device information</li>
          </ul>
        </section>

        {/* Use of Information */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>How We Use Your Information</h3>
          <p>
            We use your information to process orders, provide customer
            support, and improve our website. Your data is never shared with
            third parties without your consent, except as required by law.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>Cookies and Tracking</h3>
          <p>
            We use cookies to personalize your experience and analyze website
            traffic. You can adjust your cookie settings in your browser
            preferences.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>Data Security</h3>
          <p>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access and misuse.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at{" "}
            <a href="mailto:support@fakestore.com">support@fakestore.com</a>.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
