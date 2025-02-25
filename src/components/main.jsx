import React, { useState, useEffect } from "react";

const Home = () => {
  const images = [
    "/assets/main1.webp",
    "/assets/main2.webp",
    "/assets/main3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1300px",
        height: "650px",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "10px",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 1.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "650px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          color: "#fff",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        ❮
      </button>

      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          color: "#fff",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Home;
