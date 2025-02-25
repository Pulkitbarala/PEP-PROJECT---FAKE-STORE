import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const userEmail = localStorage.getItem('userEmail');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">FAKESTORE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {userEmail ? (
                            <>
                                <span className="nav-link me-2">Welcome, {userEmail}</span>
                                <button className="btn btn-outline-dark me-2" onClick={handleLogout}>
                                    <i className="fa fa-sign-out-alt me-1"></i> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn btn-outline-dark me-2">
                                    <i className="fa fa-sign-in-alt me-1"></i> Login
                                </NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark me-2">
                                    <i className="fa fa-user-plus me-1"></i> Register
                                </NavLink>
                            </>
                        )}
                        <NavLink to="/cart" className="btn btn-outline-dark">
                            <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
