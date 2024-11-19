import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Dashboard.css'; // Import your CSS styles
import Image1 from '../assets/image1.png'; 

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="dashboard-container app-container">
      <main className="main-content text-center">
        <div className="about-image-item">
          <img
            src={Image1}
            alt="Representation of stock photos"
            className="about-feature-image"
          />
        </div>
        <h1 className="main-title">
          CREATE PRO-LEVEL VIDEOS
          <br />
          WITHOUT PRO-LEVEL SKILLS
        </h1>
        <p className="subtitle">
          Omega makes video creation easier for everyone. Get seen with Omega.
        </p>
        <form className="form-container">
          <button
            className="cta-button"
            onClick={() => navigate("/video-generator")}
            type="button"
          >
            Start for free
          </button>
        </form>
      </main>
    </div>
  );
};

export default Dashboard;
