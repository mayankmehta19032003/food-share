import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus-modern">
      <div className="aboutus-modern__container">
        <div className="aboutus-modern__content">
          <h2 className="aboutus-modern__heading">About Us</h2>
          <p>
            We are HungerHackers, a team driven by the belief that no food should go to waste when it can feed someone in need. Our platform connects food donors—restaurants, hostels, canteens—with NGOs and communities to ensure surplus food reaches those who need it most.
          </p>
          <p>
            More than a platform, this is a mission. Together, we are turning surplus into smiles and building a future where compassion and technology work hand in hand.
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

