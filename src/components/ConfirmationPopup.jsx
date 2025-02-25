import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ConfirmationPopup.css'; // Updated CSS file

const ConfirmationPopup = ({ onClose }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompleted(true);
    }, 2000); // Reduced time to show the completion animation after 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="confirmationModalLabel"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="confirmationModalLabel">
              Order Confirmation
            </h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="confirmation-circle-container">
              <div className={`confirmation-circle ${isCompleted ? 'completed' : ''}`}>
                {isCompleted && (
                  <svg
                    className="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
            </div>
            <p>Your order has been successfully placed!</p>
            <p>Thank you for shopping with us. You will receive a confirmation email shortly.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
