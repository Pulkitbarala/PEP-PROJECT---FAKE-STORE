import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const dispatch = useDispatch();

  const addProduct = (item) => {
    dispatch(addCart(item));

    const id = Date.now();
    setNotifications((prev) => [...prev, id]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif !== id));
    }, 3000);
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4 d-flex">
      {[...Array(4)].map((_, index) => (
        <div className="mx-4" key={index}>
          <Skeleton height={400} width={300} />
        </div>
      ))}
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4 d-flex overflow-auto" style={{ gap: "16px" }}>
      {similarProducts.map((item) => (
        <div key={item.id} className="card text-center" style={{ width: "300px" }}>
          <img
            className="card-img-top p-3"
            src={item.image}
            alt={item.title}
            height={350}
            width={300}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title.substring(0, 20)}...</h5>
            <p className="card-text lead">${item.price}</p>
            <Link to={"/product/" + item.id} className="btn btn-dark m-1">
              View Details
            </Link>
            <button className="btn btn-outline-dark m-1" onClick={() => addProduct(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="notifications-container">
        {notifications.map((id) => (
          <div key={id} className="notification">
            <div className="circle">
              <svg className="tick-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M9.707 16.707a1 1 0 0 1-1.414 0l-3.707-3.707a1 1 0 0 1 1.414-1.414l2.999 2.999 6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7z"
                />
              </svg>
            </div>
            <span className="text">Added to cart</span>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <h2 className="mb-4">You may also like</h2>
          {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
        </div>
      </div>
      <Footer />

      <style>
        {`
          .notifications-container {
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .notification {
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: white;
            border-radius: 8px;
            padding: 8px 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: slideDownUp 3s ease forwards;
            width: auto;
            white-space: nowrap;
          }

          .circle {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background-color: green;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .tick-icon {
            width: 16px;
            height: 16px;
            display: block;
          }

          .text {
            font-size: 14px;
            font-weight: 400;
            color: black;
          }

          @keyframes slideDownUp {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            10% {
              transform: translateY(0);
              opacity: 1;
            }
            90% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Product;
