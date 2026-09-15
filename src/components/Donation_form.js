import React, { useState, useRef } from "react";
import './Donation_form.css';

const Donation_form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+65 ",
    address: "",
    cardName: "",
    cardNum: "",
    expMonth: "",
    expYear: "",
    cvv: ""
  });

  const [errors, setErrors] = useState({});
  const donationFormRef = useRef(null);
  const [selectedAmount, setSelectedAmount] = useState("10");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [
    { value: "10", label: "$10" },
    { value: "20", label: "$20" },
    { value: "50", label: "$50" },
    { value: "100", label: "$100" },
    { value: "custom", label: "Others" },
  ];

  const handleAmountClick = (value) => {
    setSelectedAmount(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount("custom");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!value.startsWith("+65 ")) return;

      const phoneNumber = value.slice(4);
      if (phoneNumber.length > 8 || !/^\d*$/.test(phoneNumber)) return;
    }

    if (name === "cardNum") {
      const cleanedValue = value.replace(/\D/g, '');
      const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1-');
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const scrollToForm = () => {
    donationFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    const phonePattern = /^\+65 \d{8}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter Valid phone number (+65 XXXXXXXX).";
    }
    // Add validation for address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }
    if (!formData.cardName.trim()) {
      newErrors.cardName = "Card name is required.";
    }
    const cardNumPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!cardNumPattern.test(formData.cardNum)) {
      newErrors.cardNum = "Invalid card number format.";
    }
    if (!formData.expMonth) {
      newErrors.expMonth = "Expiration month is required.";
    }
    if (!formData.expYear) {
      newErrors.expYear = "Expiration year is required.";
    }
    if (!formData.cvv || formData.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits.";
    }
    if (selectedAmount === "custom" && (!customAmount || customAmount <= 0)) {
      newErrors.customAmount = "Please enter a valid donation amount.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      const donationAmount = selectedAmount === "custom" ? customAmount : selectedAmount;
      alert(`Thank you for your generous donation of $${donationAmount}!`);
      setFormData({
        name: "",
        email: "",
        phone: "+65 ",
        address: "",
        cardName: "",
        cardNum: "",
        expMonth: "",
        expYear: "",
        cvv: ""
      });
      setCustomAmount("");
      setSelectedAmount("10");
      window.location.href = "/";
    }
  };
  

  return (
    <div>
      <div className="hero-section5">
        <img
          src="https://media.timeout.com/images/105590746/image.jpg"
          alt="Hero"
          className="hero-image5"
        />
        <div className="hero-content5">
          <h3 className="hero5">Donate Today and Help Change a Pet’s Life Forever</h3>
          <button onClick={scrollToForm} className="hero-button4">Donate Now</button>
        </div>
      </div>

      <h1 className="donation-title">Donation at Pet Heaven</h1>

      <div className="donation-content">
        <h2>Help Us Give Pets a Second Chance at Life – Your Donation Makes a Difference</h2>
        <p>At Pet Heaven Adoption, we believe every pet deserves a loving home. Every year, hundreds of animals are abandoned, left homeless, and waiting for a chance to experience the love and care they deserve. We work tirelessly to rescue, care for, and find forever homes for pets of all shapes, sizes, and backgrounds. But we can’t do it alone. That’s where you can come in.</p>

        <p><strong>Here’s how Your Donation Help us:</strong></p>
        <ul>
          <li><strong>Rescue Operations:</strong> Fueling our ability to reach more animals in need and bring them into our care.</li>
          <li><strong>Medical Care: </strong> Covering the cost of vaccinations, surgeries, and treatments for injured or ill animals.</li>
          <li><strong>Food and Shelter:</strong> Providing nourishing food, clean spaces, and cozy beds to every animal in our care.</li>
          <li><strong>Adoption Programs:</strong> Supporting our programs to find loving homes for pets who need them the most.</li>
          <li><strong>Community Outreach:</strong> Educating the public on the importance of adoption and responsible pet ownership.</li>
        </ul>

        <div>
          <h2>Join Our Mission – Together, We Can Save Lives</h2>
          <p>
            By donating today, you’re not just supporting a charity; you’re becoming part of a community that believes in compassion and second chances. You’re helping us create more success adoption stories. You’re making it possible for animals in need to experience the love and joy of a forever home.
          </p>
        </div>

        <div className="donation-end">
          <p><strong>Donate now, and together, let’s create a world where every pet has a place to call home.</strong></p>
          <p><strong>Thank you for your generosity and for giving these animals a chance at life!</strong></p>
        </div>

      </div>

      <div ref={donationFormRef} className="donation-form-container">
        <h2 className="donation-form-heading">Donation Form</h2>
        <form onSubmit={handleSubmit} className="donation-form">

          <div>
            <h3 className="donation-title">Selelcte Donation Amount</h3>
            <p></p>
            <div className="donation-form1">
              {amounts.map((amount) => (
                <div
                  key={amount.value}
                  className={`money-shape ${selectedAmount === amount.value ? "selected" : ""
                    }`}
                  onClick={() => handleAmountClick(amount.value)}
                >
                  {amount.label}
                </div>
              ))}
              
              {selectedAmount === "custom" && (
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="custom-amount-input"
                />
              )}
              {errors.customAmount && <p className="error-text">{errors.customAmount}</p>}
            </div>
          </div>

          <div className="donationform-content">
            {/* Left Side: Detail Information */}
            <div className="form-left">
              <h3 className="donation-title">Detail Information</h3>
              <div className="donation-form-field">
                <label className="donation-field-label" htmlFor="name" style={{ fontWeight: 'bold' }}>Full Name:</label>
                {errors.name && <p className="error-text">{errors.name}</p>}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="donation-input-field"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="donation-form-field">
                <label className="donation-field-label" htmlFor="email">Email:</label>
                {errors.email && <p className="error-text">{errors.email}</p>}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="donation-input-field"
                  placeholder="Enter Email"
                />
              </div>
              <div className="donation-form-field">
                <label className="donation-field-label" htmlFor="phone">Phone Number:</label>
                {errors.phone && <p className="error-text">{errors.phone}</p>}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="donation-input-field"
                  placeholder="Enter Phone Number in format +65 XXXXXXXX"
                />
              </div>

              <div className="donation-form-field">
                <label className="donation-field-label" htmlFor="address">Address:</label>
                {errors.address && <p className="error-text">{errors.address}</p>}
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="volunteer-input-field"
                  placeholder="Enter Address"
                />
              </div>
            </div>

            {/* Right Side: Payment Information */}
            <div className="form-right">
              <h3 className="donation-title">Payment Information</h3>
              <div className="inputBox">
                <label className="donation-field-label" htmlFor="cardName">Card Name:</label>
                {errors.cardName && <p className="error-text">{errors.cardName}</p>}
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="donation-input-field"
                  placeholder="Enter Card Name"
                />
              </div>
              <div className="inputBox">
                <label className="donation-field-label" htmlFor="cardNum">Credit Card Number:</label>
                {errors.cardNum && <p className="error-text">{errors.cardNum}</p>}
                <input
                  type="text"
                  id="cardNum"
                  name="cardNum"
                  value={formData.cardNum}
                  onChange={handleChange}
                  required
                  className="donation-input-field"
                  placeholder="1111-2222-3333-4444"
                  maxLength="19"
                />
              </div>
              <div className="formRow">
                <div className="inputBox">
                  <label className="donation-field-label" htmlFor="expMonth">Exp Month:</label>
                  {errors.expMonth && <p className="error-text">{errors.expMonth}</p>}
                  <select
                    id="expMonth"
                    name="expMonth"
                    value={formData.expMonth}
                    onChange={handleChange}
                    required
                    className="donation-input-field"
                  >
                    <option value="">Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="inputBox">
                  <label className="donation-field-label" htmlFor="expYear">Exp Year:</label>
                  {errors.expYear && <p className="error-text">{errors.expYear}</p>}
                  <select
                    id="expYear"
                    name="expYear"
                    value={formData.expYear}
                    onChange={handleChange}
                    required
                    className="donation-input-field"
                  >
                    <option value="">Year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                  </select>
                </div>
              </div>

              <div className="inputBox">
                <label className="donation-field-label" htmlFor="cvv">CVV:</label>
                {errors.cvv && <p className="error-text">{errors.cvv}</p>}
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="donation-input-field"
                  placeholder="CVV"
                  maxLength="3"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="donation-submit-btn">Submit Donation</button>
        </form>
      </div>
    </div >
  );
};

export default Donation_form;
