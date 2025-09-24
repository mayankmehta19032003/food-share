import React, { useState } from "react";
import "./ContributeFood.css";

const ContributeFood = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    quantity: "",
    food: "",
    location: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contribute-section">
      <h2>Contribute Food</h2>
      <form className="contribute-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          Food Quantity:
          <input type="number" name="quantity" value={form.quantity} onChange={handleChange} required />
        </label>
        <label>
          Food Name:
          <input type="text" name="food" value={form.food} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={form.location} onChange={handleChange} required />
        </label>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
      {submitted && (
        <div className="thank-you">
          <h3>Thank you for your contribution!</h3>
          <p>We appreciate your support in helping the community.</p>
        </div>
      )}
    </section>
  );
};

export default ContributeFood;
