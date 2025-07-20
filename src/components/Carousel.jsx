import React, { useState, useEffect, useCallback, useMemo } from "react";
import img1 from "../assets/images/banner4.jpeg";
import img2 from "../assets/images/banner5.jpeg";
import img3 from "../assets/images/banner61.jpeg";
import img4 from "../assets/images/banner1.jpeg";
import img5 from "../assets/images/banner71.jpeg";
import img6 from "../assets/images/banner8.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideInterval = 2000;

  const slides = useMemo(() => [img1, img6, img2, img3, img4, img5], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, slideInterval);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (slideInterval / 16), 100));
    }, 16);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "12px",
        marginTop: "10px",
        // padding: "1rem",
        backgroundColor: "transparent", // Transparent background
      }}
    >
      {/* Carousel Images */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          padding: "1rem",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform:
                index === currentSlide
                  ? "translateX(0)"
                  : index > currentSlide
                    ? "translateX(100%)"
                    : "translateX(-100%)",
              transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
            role="img"
            aria-hidden={index !== currentSlide}
            aria-label={`Slide ${index + 1}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                width: "80%",
                maxHeight: "100%",
                height: "auto",
                objectFit: "contain",
                margin: "0 auto",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>



      {/* Carousel Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "100%",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.8)", // Semi-transparent border
              backgroundColor:
                index === currentSlide ? "#007bff" : "transparent",
              margin: "0 6px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
              transform: index === currentSlide ? "scale(1.2)" : "scale(1)",
            }}
            onMouseOver={(e) =>
            (e.currentTarget.style.transform =
              index === currentSlide ? "scale(1.2)" : "scale(1.1)")
            }
            onMouseOut={(e) =>
            (e.currentTarget.style.transform =
              index === currentSlide ? "scale(1.2)" : "scale(1)")
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        type="button"
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.4)", // More transparent background
          border: "none",
          color: "#fff",
          fontSize: "24px",
          padding: "12px 16px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "background-color 0.3s, transform 0.3s",
          zIndex: 10,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)";
          e.currentTarget.style.transform = "translateY(-50%)";
        }}
        aria-label="Previous Slide"
      >
        <ArrowBackIosIcon />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.4)", // More transparent background
          border: "none",
          color: "#fff",
          fontSize: "24px",
          padding: "12px 16px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "background-color 0.3s, transform 0.3s",
          zIndex: 10,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)";
          e.currentTarget.style.transform = "translateY(-50%)";
        }}
        aria-label="Next Slide"
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;