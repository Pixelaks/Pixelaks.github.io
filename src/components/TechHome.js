import React from 'react';
import { Link } from 'react-router-dom';
import './TechHome.css'; // We will create this next

function TechHome() {
  return (
    <div className="tech-container">
      {/* 1. HERO SECTION */}
      <header className="tech-hero">
        <h1>Pixelaks Technologies</h1>
        <p>Future-ready software solutions & interactive experiences.</p>
        <div className="hero-buttons">
          <a href="#college-app" className="btn-primary">Our Latest App</a>
          <Link to="/games" className="btn-secondary">Explore Games</Link>
        </div>
      </header>

      {/* 2. COLLEGE MANAGEMENT APP SECTION */}
      <section id="college-app" className="app-section">
        <div className="app-content">
          <h2>College Management System</h2>
          <p>A revolutionary platform designed to streamline campus administration, student tracking, and digital learning.</p>
          <ul className="feature-list">
            <li>✔ Attendance Tracking</li>
            <li>✔ Fee Management</li>
            <li>✔ Real-time Notifications</li>
          </ul>
        </div>
        <div className="app-image">
           {/* Replace with your app screenshot */}
           <div className="mockup-display">App Preview Image</div>
        </div>
      </section>

      {/* 3. GAMES TEASER SECTION */}
      <section className="games-teaser">
        <h2>From the Studio of Pixelaks Games</h2>
        <p>Check out our hit titles like "Into The Fantasy" and "TypoTopple".</p>
        <Link to="/games" className="view-games-link">Enter Games Portal →</Link>
      </section>
    </div>
  );
}

export default TechHome;
