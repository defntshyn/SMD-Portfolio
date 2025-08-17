import React, { useState } from 'react';
import './HomeStyle.css';
import Picture1 from '/assets/Me.png';
import Picture2 from '/assets/Me2.png';

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipImage = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="content-banner">
      <div className="main-image">
        <div className="image-container" onClick={flipImage}>
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
            <img src={Picture1} className="front" alt="Front" />
            <img src={Picture2} className="back" alt="Back" />
          </div>
        </div>
      </div>
      <div className="banner-details">
        <h1>Shayne Danos</h1>
        <p><span className="first-line">Welcome to my portfolio!</span></p>
        <p>
          I’m a <span class="skilled">front-end web developer</span> and <span class="skilled">UI/UX
            designer</span> enthusiast who enjoys creating simple, user-friendly, and visually appealing
          websites. This space is a glimpse into what I’ve learned and built so far—feel free to look around.
        </p>
        <div className="social">
          <p>Connect:</p>
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <a href=""><i className="fa-brands fa-google"></i></a>
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
