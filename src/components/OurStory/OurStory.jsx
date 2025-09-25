import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="ourstory-section">
      <h2 className="ourstory-title">Our Story</h2>
  <div className="ourstory-content">
        <p>
          Every idea begins with a question.<br />
          Ours was simple: “Why should something so valuable ever go to waste when it could bring hope to someone in need?”
        </p>
        <p>
          What started as a small conversation soon grew into a vision—a vision to bridge gaps, connect hearts, and transform surplus into smiles. We believe food is more than just nourishment. It is dignity. It is care. It is life.
        </p>
        <p>
          Through this platform, we are not just building technology. We are building a movement where generosity meets need, where every contribution creates impact, and where communities come together for something greater than themselves.
        </p>
        <p>
          This is not just our story. It is the story of everyone who believes that even the smallest act of kindness has the power to change the world.
        </p>
        <div className="meals-progress-bar">
          <h4>Meals Supplied</h4>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{width: '80%'}}>8000 / 10000 meals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;



