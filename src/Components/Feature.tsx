import React from 'react';
import '../styles/Feature.css';
import Image from '../assets/image4.png';

const Feature: React.FC = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2>Features of AI Video Generator</h2>
          <h3>Online AI Video Generator</h3>
        </div>
        <div className="feature-images">
          <div className="image-item">
            <img
              src={Image}
              alt="Stock Photos"
              className="feature-image"
            />
          </div>
          <div className="image-item">
            <video
              src="https://assets-static.invideo.io/files/Stock_Footage2x_V2_78c7e1c798.mp4"
              className="feature-image"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
