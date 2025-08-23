import React, { useState, useEffect, useRef } from 'react'
// import Picture from '../assets/UE.jpg'
import './Other.css'
import slides from '../data/slides.js';
import { useNavigate } from "react-router-dom";

const FeatureCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragTranslate, setDragTranslate] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
  };

  const handleTouchStart = (e) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (dragStart !== null) {
      setDragTranslate(e.clientX - dragStart);
    }
  };

  const handleTouchMove = (e) => {
    if (dragStart !== null) {
      setDragTranslate(e.touches[0].clientX - dragStart);
    }
  };

  const handleMouseUp = () => {
    if (dragTranslate > 50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (dragTranslate < -50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
    setDragStart(null);
    setDragTranslate(0);
  };

  const handleTouchEnd = handleMouseUp;
  const navigate = useNavigate();

  return (
    <>
      <div
        className="carousel"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <span className="one"></span>
        <span className="two"></span>

        <div
          className="feature-list"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${dragTranslate}px))`,
            transition: dragStart ? "none" : "transform 0.5s ease-in-out",
          }}
        >

          {slides.map((slide, index) => (
            <button key={index} className="slide" onClick={() => navigate(`/works/${slide.id}`)}>
              <div className="list-container">
                <img src={`/assets/${slide.img}`} alt={slide.title} />
                <div className="work-description">
                  <h4>{slide.title}</h4>
                  <p>Tags:
                    <ul>
                      {slide.use.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </>
  )
}

export default FeatureCarousel