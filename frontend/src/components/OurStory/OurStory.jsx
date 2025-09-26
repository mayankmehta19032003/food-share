import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="ourstory-section">
      <h2 className="ourstory-title">Our Story</h2>
      <div className="ourstory-content">
        <p>
          Our journey began with a simple idea: to turn compassion into action.
          What started as a handful of volunteers has grown into a vibrant
          community, united by the belief that every donation can spark real
          change.
        </p>
        <div className="ourstory-quote-box">
          <blockquote>
            “Kindness is the thread that weaves communities together.”
          </blockquote>
          <cite>- FoodShare Team</cite>
        </div>
        <p>
          Today, we organize events, support those in need, and set aside 20% of
          every donation for emergencies—so help is always within reach. Together,
          we’re building a future where generosity and hope go hand in hand.
        </p>
      </div>
    </section>
  );
};

export default OurStory;



