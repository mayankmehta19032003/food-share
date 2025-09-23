import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus-modern">
      <div className="aboutus-modern__container">
        <div className="aboutus-modern__content">
          <h2 className="aboutus-modern__heading">About Us</h2>
          <p>
            We are a creative team passionate about building digital experiences
            that inspire and engage. Our mission is to blend technology and design
            to deliver outstanding results for our clients.
          </p>
          <div className="aboutus-modern__cards">
            <div className="aboutus-modern__card">
              <span role="img" aria-label="rocket">
                🚀
              </span>
              <h3>Innovation</h3>
              <p>We embrace new ideas and technologies to stay ahead.</p>
            </div>
            <div className="aboutus-modern__card">
              <span role="img" aria-label="team">
                🤝
              </span>
              <h3>Teamwork</h3>
              <p>Collaboration is at the heart of everything we do.</p>
            </div>
            <div className="aboutus-modern__card">
              <span role="img" aria-label="star">
                🌟
              </span>
              <h3>Excellence</h3>
              <p>We strive for quality and deliver with pride.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

