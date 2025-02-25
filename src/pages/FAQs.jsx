import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const FAQs = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email after purchase. Simply click the link to view the real-time status of your order.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all items. Ensure the item is unused, in its original packaging, and accompanied by a receipt or proof of purchase. To initiate a return, visit the 'Returns' section on our website.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-7 business days within the United States. Express shipping is available for faster delivery. International orders typically take 7-14 business days depending on the destination and customs processing.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary depending on the destination. Please refer to the checkout page for specific shipping rates and estimated delivery dates.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact us via the Contact Us page on our website or email us at support@fakestore.com. Our customer support team is available Monday to Friday from 9:00 AM to 6:00 PM (EST).",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and UPI. All transactions are securely processed to ensure your payment information is protected.",
    },
    {
      question: "Can I cancel or modify my order after placing it?",
      answer:
        "Orders can be canceled or modified within 24 hours of placement. Please contact our customer support team as soon as possible with your order number to make changes.",
    },
    {
      question: "Are my personal details safe when shopping online?",
      answer:
        "Yes, we prioritize the security of your personal information. Our website uses SSL encryption to ensure that all data transmitted is secure and confidential. We do not store payment details on our servers.",
    },
    {
      question: "Do you offer gift wrapping services?",
      answer:
        "Yes, we offer gift wrapping for most items. You can select the gift wrapping option during checkout. Additional charges may apply.",
    },
    {
      question: "How do I apply a discount code?",
      answer:
        "To apply a discount code, enter the code during the checkout process in the 'Promo Code' field. The discount will be applied to your order total if the code is valid.",
    },
  ];

  return (
    <>
      <header
        style={{
          padding: "15px 20px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <button onClick={() => navigate(-1)} className="btn btn-outline-dark me-2">
          <i className="fa fa-arrow-left me-1"></i> Back
        </button>
      </header>

      <div style={{ padding: "30px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", textAlign: "center" }}>Frequently Asked Questions</h1>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "30px", borderBottom: "1px solid #ddd", paddingBottom: "20px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "10px", color: "#343a40" }}>
                {index + 1}. {faq.question}
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.7" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQs;
