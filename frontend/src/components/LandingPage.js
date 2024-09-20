// src/components/LandingPage.js
import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css' // Ensure to create a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">MySocialApp</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to MySocialApp</h1>
        <p>Connect, share, and interact with your friends like never before.</p>
        <div className="cta">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/about" className="btn-secondary">Learn More</Link>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-item">
          <h3>User Profiles</h3>
          <p>Create and customize your own profile.</p>
        </div>
        
      </section>
      <footer className="footer">
        <div className="contact">
          <div className="feature-item">
          <h3>Real-time Updates</h3>
          <p>Stay up-to-date with live notifications and updates.</p>
        </div>
        <div className="feature-item">
          <h3>Friend Requests</h3>
          <p>Connect with friends and manage your network.</p>
        </div>
          <p>Contact us: <a href="mailto:support@mysocialapp.com">support@mysocialapp.com</a></p>
        </div>
        <nav className="footer-nav">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <p>&copy; 2024 MySocialApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
