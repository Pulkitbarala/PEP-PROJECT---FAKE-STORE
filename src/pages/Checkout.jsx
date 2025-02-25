import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../redux/action"; // Corrected import path

const Checkout = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch("https://countriesnow.space/api/v0.1/countries");
            const data = await response.json();
            const sortedCountries = data.data.map((country) => country.country).sort();
            setCountries(sortedCountries);
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        const fetchStates = async () => {
            if (selectedCountry) {
                const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ country: selectedCountry }),
                });
                const data = await response.json();
                setStates(data.data.states.map((state) => state.name));
            }
        };
        fetchStates();
    }, [selectedCountry]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(emptyCart());
        setShowConfirmation(true);
    };

    const EmptyCart = () => (
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5 bg-light text-center">
                    <h4 className="p-3 display-5">No item in Cart</h4>
                    <Link to="/" className="btn btn-outline-dark mx-4">
                        <i className="fa fa-arrow-left"></i> Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );

    const ShowCheckout = () => {
        let subtotal = 0;
        let shipping = 30.0;
        let totalItems = 0;

        state.forEach((item) => {
            subtotal += item.price * item.qty;
            totalItems += item.qty;
        });

        return (
            <div className="container py-5">
                <div className="row my-4">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <div className="card mb-4">
                            <div className="card-header py-3 bg-light">
                                <h5 className="mb-0">Order Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping<span>${shipping}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <strong>Total amount</strong>
                                        <strong>${Math.round(subtotal + shipping)}</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 col-lg-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h4 className="mb-0">Billing address</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row g-3">
                                        <div className="col-sm-6 my-1">
                                            <label htmlFor="firstName" className="form-label">
                                                First name
                                            </label>
                                            <input type="text" className="form-control" id="firstName" required />
                                        </div>

                                        <div className="col-sm-6 my-1">
                                            <label htmlFor="lastName" className="form-label">
                                                Last name
                                            </label>
                                            <input type="text" className="form-control" id="lastName" required />
                                        </div>

                                        <div className="col-12 my-1">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input type="email" className="form-control" id="email" required />
                                        </div>

                                        <div className="col-12 my-1">
                                            <label htmlFor="address" className="form-label">
                                                Address
                                            </label>
                                            <input type="text" className="form-control" id="address" required />
                                        </div>

                                        <div className="col-md-6 my-1">
                                            <label htmlFor="country" className="form-label">
                                                Country
                                            </label>
                                            <select
                                                className="form-select"
                                                id="country"
                                                value={selectedCountry}
                                                onChange={(e) => setSelectedCountry(e.target.value)}
                                                required
                                            >
                                                <option value="">Choose...</option>
                                                {countries.map((country, index) => (
                                                    <option key={index} value={country}>
                                                        {country}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-6 my-1">
                                            <label htmlFor="state" className="form-label">
                                                State
                                            </label>
                                            <select className="form-select" id="state" required>
                                                <option value="">Choose...</option>
                                                {states.map((state, index) => (
                                                    <option key={index} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-6 my-1">
                                            <label htmlFor="zip" className="form-label">
                                                Zip
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <h4 className="mb-3">Payment</h4>

                                    <div className="my-3">
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="paymentMethod"
                                                value="cod"
                                                checked={paymentMethod === "cod"}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                required
                                            />
                                            <label className="form-check-label">Cash on Delivery (COD)</label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="paymentMethod"
                                                value="netBanking"
                                                checked={paymentMethod === "netBanking"}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                required
                                            />
                                            <label className="form-check-label">Net Banking</label>
                                        </div>

                                        {paymentMethod === "netBanking" && (
                                            <select className="form-select mt-2" required>
                                                <option value="">Select Bank</option>
                                                <option value="SBI">SBI</option>
                                                <option value="HDFC">HDFC</option>
                                                <option value="ICICI">ICICI</option>
                                            </select>
                                        )}

                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="paymentMethod"
                                                value="upi"
                                                checked={paymentMethod === "upi"}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                required
                                            />
                                            <label className="form-check-label">UPI</label>
                                        </div>

                                        {paymentMethod === "upi" && (
                                            <input
                                                type="text"
                                                className="form-control mt-2"
                                                placeholder="Enter UPI ID"
                                                required
                                            />
                                        )}
                                    </div>

                                    <hr className="my-4" />

                                    <button className="w-100 btn btn-primary" type="submit">
                                        Continue to checkout
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Checkout</h1>
                <hr />
                {state.length ? <ShowCheckout /> : <EmptyCart />}
            </div>
            <Footer />
            {showConfirmation && <ConfirmationPopup onClose={() => setShowConfirmation(false)} />}
        </>
    );
};

const ConfirmationPopup = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', 
            alignItems: 'center', zIndex: 9999
        }}>
            <div style={{
                backgroundColor: '#fff', padding: '30px', borderRadius: '8px', 
                width: '400px', textAlign: 'center', border: '2px solid #4caf50', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div style={{
                        border: '4px solid #4caf50', borderRadius: '50%', width: '80px', height: '80px', 
                        position: 'relative', animation: 'circle-animation 0.7s ease-out forwards', display: 'flex', 
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={{
                            width: '50px', height: '50px', opacity: 0, animation: 'checkmark-animation 0.4s ease-out forwards 0.7s'
                        }}>
                            <circle cx="26" cy="26" r="25" fill="none" />
                            <path fill="none" stroke="#4caf50" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" d="M14 27l7 7 16-16" />
                        </svg>
                    </div>
                </div>
                <h2 style={{ color: '#333' }}>Order Confirmed!</h2>
                <p>Your order has been successfully placed.</p>
                <button onClick={onClose} style={{
                    backgroundColor: '#4caf50', color: '#fff', border: 'none', padding: '10px 20px', 
                    borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '10px'
                }}>
                    Close
                </button>
            </div>

            <style>
                {`
                    @keyframes circle-animation {
                        0% { transform: scale(0); opacity: 0; }
                        70% { transform: scale(1.1); opacity: 0.9; }
                        100% { transform: scale(1); opacity: 1; }
                    }

                    @keyframes checkmark-animation {
                        0% { opacity: 0; transform: scale(0); }
                        100% { opacity: 1; transform: scale(1); }
                    }
                `}
            </style>
        </div>
    );
};

export default Checkout;
