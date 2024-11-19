import React from 'react';
import '../styles/About.css';
import Image2 from '../assets/image2.png'; // Adjusted import for `src/assets`
import Image3 from '../assets/image3.png';

const AboutUs: React.FC = () => {
  return (
    <section className="aboutus-section">
      <div className="aboutus-container">
        <h2 className="aboutus-heading">About AI Video Generator</h2>
        <p className="aboutus-description">
          At AI Video Generator, we are dedicated to transforming your ideas into stunning video content with the power of Artificial Intelligence. Our mission is to make professional video creation accessible to everyone, from businesses and educators to marketers and content creators.
        </p>

        <div className="aboutus-features">
          <div className="about-feature">
            <h3 className="about-feature-heading">Our Vision</h3>
            <p className="about-feature-description">
              To revolutionize video creation by eliminating technical barriers and empowering users with AI-driven tools.
            </p>
            <div className="about-image-item">
              <img
                src={Image2}
                alt="Representation of stock photos"
                className="about-feature-image"
              />
            </div>
          </div>

          <div className="about-feature">
            <h3 className="about-feature-heading">Why Choose Us?</h3>
            <p className="about-feature-description">
              With our cutting-edge AI technology, you can create 4K studio-quality videos in minutes, complete with text-to-speech options, customizable templates, and seamless editing tools.
            </p>
            <div className="about-image-item">
              <img
                src={Image3}
                alt="Representation of stock photos"
                className="about-feature-image"
              />
            </div>
          </div>
        </div>

        <p className="aboutus-footer">
          Join us and unleash your creativity with our innovative AI tools. Let’s create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
