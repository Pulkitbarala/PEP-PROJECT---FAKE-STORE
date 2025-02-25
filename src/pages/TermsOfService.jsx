import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header with Back Button */}
      <div className="container my-4 d-flex justify-content-between align-items-center" style={{ maxWidth: "900px" }}>
        <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>
          <i className="fa fa-arrow-left me-2"></i>Back
        </button>
        <h1 className="text-center mb-0" style={{ fontWeight: "700" }}>
          Terms of Service
        </h1>
        <div style={{ width: "80px" }}></div>
      </div>

      {/* Content */}
      <div className="container my-5" style={{ maxWidth: "900px" }}>
        {/* Agreement */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>1. Agreement</h3>
          <p>
            By accessing and using our website, you agree to comply with and be bound by these terms. If you do not agree, please do not use our site.
          </p>
        </section>

        {/* Use of Website */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>2. Use of Website</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">You must be at least 18 years old to use our services.</li>
            <li className="list-group-item">Do not misuse our services or interfere with our website's functionality.</li>
            <li className="list-group-item">Unauthorized use of this website may result in legal action.</li>
          </ul>
        </section>

        {/* Account Responsibilities */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>3. Account Responsibilities</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        {/* Purchases */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>4. Purchases</h3>
          <p>
            All purchases made on our website are subject to product availability and pricing accuracy. We reserve the right to cancel or refuse any order at our discretion.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>5. Intellectual Property</h3>
          <p>
            All content on this website, including text, images, and logos, is the property of FAKESTORE and is protected by copyright laws.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>6. Limitation of Liability</h3>
          <p>
            FAKESTORE is not liable for any direct, indirect, or incidental damages resulting from the use of our website or products.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-5">
          <h3 className="mb-3" style={{ fontWeight: "600" }}>7. Contact</h3>
          <p>
            For any questions regarding these Terms of Service, please contact us at{" "}
            <a href="mailto:support@fakestore.com">support@fakestore.com</a>.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
