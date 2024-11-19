import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Components
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Feature from './Components/Feature';
import VideoGenerator from './Components/VideoGenerator';
import AboutUs from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <div id="dashboard">
                <Dashboard />
              </div>
              <div id="feature">
                <Feature />
              </div>
              <div id="about">
                <AboutUs />
              </div>
              <div id="footer">
                <Footer />
              </div>
            </>
          } 
        />
        <Route 
          path="/video-generator" 
          element={
            <>
              <VideoGenerator />
              <Footer />
            </>
          } 
        />
        <Route path="/login" element={
          <>
            <Login />
            <Footer />
          </>
        }
        />
        <Route path="/signup" element={
          <>
            <Signup />
            <Footer />
          </>
        }
        />
        <Route 
          path="*" 
          element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>
                Go Back to Home
              </a>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
