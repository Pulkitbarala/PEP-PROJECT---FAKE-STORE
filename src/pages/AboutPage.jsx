import React from "react";
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8 p-6">
        {/* About Us Section */}
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <hr className="w-24 border-gray-400 mx-auto mb-6" />
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Welcome to <strong>FAKESTORE</strong> — your trusted online store for premium-quality 
          products at unbeatable prices. Our curated selection spans from stylish clothing and 
          elegant jewelry to the latest electronics, ensuring there's something for everyone.  
          <br /><br />
          At FAKESTORE, we are committed to delivering not just products but experiences. Our 
          user-friendly platform, secure payment options, and dedicated customer service team 
          ensure a seamless shopping journey. We believe in providing products that combine 
          quality, affordability, and style, making everyday life more convenient and enjoyable.  
          <br /><br />
          Thank you for choosing FAKESTORE — where shopping meets simplicity!
        </p>

        {/* Our Products Section */}
        <h2 className="text-3xl font-semibold text-center mb-6">Our Products</h2>
        <div className="row">
          {[
            {
              image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Men's Clothing",
              description: "Explore our range of stylish and comfortable men's apparel, perfect for any occasion.",
            },
            {
              image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Women's Clothing",
              description: "Discover elegant and trendy women's fashion, designed to suit every style.",
            },
            {
              image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Jewelry",
              description: "Adorn yourself with our exquisite collection of timeless and modern jewelry.",
            },
            {
              image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Electronics",
              description: "Stay ahead with our latest electronic gadgets and devices for work and play.",
            }
          ].map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4 px-3">
              <div 
                className="card h-100 border rounded-lg shadow-lg overflow-hidden"
                style={cardStyle}
                onMouseOver={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img 
                  className="card-img-top img-fluid object-cover w-full" 
                  src={item.image} 
                  alt={item.title} 
                  height={160} 
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-lg font-medium">{item.title}</h5>
                  <p className="text-center text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-center my-8">Why Choose FAKESTORE?</h2>
        <div className="row text-center">
          {[ 
            { title: "Wide Product Range", description: "From fashion to electronics, we offer a diverse range of products to meet your needs." },
            { title: "Affordable Prices", description: "Enjoy competitive pricing without compromising on quality, making shopping accessible to everyone." },
            { title: "Customer Satisfaction", description: "We prioritize customer satisfaction with reliable service and quick support." },
            { title: "Contact Us", description: "Have questions or need support? Reach out to our friendly customer service team!" },
          ].map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4 d-flex align-items-stretch">
              <div 
                className="border p-4 rounded-lg shadow-lg w-100 d-flex flex-column justify-content-between"
                style={{ cursor: "pointer", transition: "all 0.3s ease-in-out", height: "220px", display: "flex" }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
