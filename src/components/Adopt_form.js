import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './Adopt_form.css';

const animals = [
  { id: 1, name: 'Max', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Cross-Breed', price: 250, photo: 'https://spca.org.sg/wp-content/uploads/2024/01/IMG-20231221-WA0038.jpg', temperament: ['Active', 'Energetic', 'Loyal', 'Playful', 'Obedient'] },
  { id: 2, name: 'Whiskers', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Domestic Shorthair', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0045.jpg', temperament: ['Curious', 'Affectionate', 'Playful', 'Independent', 'Intelligent'] },
  { id: 3, name: 'Bella', type: 'Dog', ageGroup: 'Adult', gender: 'Female', breed: 'golden retriever', price: 150, photo: 'https://spca.org.sg/wp-content/uploads/2023/10/IMG-20231005-WA0031.jpg', temperament: ['Friendly', 'Gentle', 'Loyal', 'Intelligent', 'Patient'] },
  { id: 4, name: 'Shadow', type: 'Cat', ageGroup: 'Senior', gender: 'Male', breed: 'Domestic Shorthair', price: 25, photo: 'https://spca.org.sg/wp-content/uploads/2024/09/IMG-20240930-WA0082.jpg', temperament: ['Independent', 'Affectionate', 'Quiet', 'Calm', 'Playful'] },
  { id: 5, name: 'Charlie', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Black Tan', price: 250, photo: 'https://spca.org.sg/wp-content/uploads/2022/12/Benny_2.jpg', temperament: ['Energetic', 'Loyal', 'Playful', 'Affectionate', 'Curious'] },
  { id: 6, name: 'Milo', type: 'Cat', ageGroup: 'Adult', gender: 'Male', breed: 'Local', price: 80, photo: 'https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240820-WA0037.jpg', temperament: ['Independent', 'Curious', 'Playful', 'Affectionate', 'Loyal'] },
  { id: 7, name: 'Daisy', type: 'Dog', ageGroup: 'Senior', gender: 'Female', breed: 'Cross-Breed', price: 70, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-11-at-3.38.53-PM.jpeg', temperament: ['Gentle', 'Affectionate', 'Loyal', 'Calm', 'Intelligent'] },
  { id: 8, name: 'Luna', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Local', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2023/11/IMG-20231113-WA0014.jpg', temperament: ['Playful', 'Curious', 'Energetic', 'Independent', 'Loyal'] },
  { id: 9, name: 'Rocky', type: 'Dog', ageGroup: 'Adult', gender: 'Male', breed: 'Cross-Breed', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2023/07/IMG-20230705-WA0012.jpg', temperament: ['Active', 'Loyal', 'Obedient', 'Affectionate', 'Playful'] },
  { id: 10, name: 'Ginger', type: 'Cat', ageGroup: 'Adult', gender: 'Female', breed: 'Domestic Shorthair', price: 80, photo: 'https://spca.org.sg/wp-content/uploads/2024/05/IMG-20240514-WA0026.jpg', temperament: ['Affectionate', 'Quiet', 'Playful', 'Curious', 'Independent'] },
  { id: 11, name: 'Rex', type: 'Dog', ageGroup: 'Senior', gender: 'Male', breed: 'Cross-Breed', price: 70, photo: 'https://spca.org.sg/wp-content/uploads/2024/11/IMG-20241115-WA0016.jpg', temperament: ['Loyal', 'Gentle', 'Playful', 'Obedient', 'Intelligent'] },
  { id: 12, name: 'Lily', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Domestic Shorthair', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/11/IMG-20241115-WA0038.jpg', temperament: ['Curious', 'Playful', 'Independent', 'Affectionate', 'Energetic'] },
  { id: 13, name: 'Ziggy', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Cross-Breed', price: 250, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-22-at-8.22.46-AM.jpeg', temperament: ['Playful', 'Energetic', 'Loyal', 'Curious', 'Affectionate'] },
  { id: 14, name: 'Coco', type: 'Cat', ageGroup: 'Adult', gender: 'Female', breed: 'Domestic Shorthair', price: 80, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0006.jpg', temperament: ['Loyal', 'Affectionate', 'Quiet', 'Playful', 'Independent'] },
  { id: 15, name: 'Duke', type: 'Dog', ageGroup: 'Adult', gender: 'Male', breed: 'Cross-Breed', price: 80, photo: 'https://www.asdsingapore.com/assets/images/adopts/fin-20220327150217.jpg', temperament: ['Loyal', 'Playful', 'Obedient', 'Energetic', 'Friendly'] },
  { id: 16, name: 'Pumpkin', type: 'Cat', ageGroup: 'Senior', gender: 'Female', breed: 'Cross-Breed', price: 25, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0022.jpg', temperament: ['Gentle', 'Independent', 'Loyal', 'Affectionate', 'Quiet'] },
  { id: 17, name: 'Buster', type: 'Dog', ageGroup: 'Senior', gender: 'Male', breed: 'Cross-Breed', price: 70, photo: 'https://www.asdsingapore.com/assets/images/adopts/tarzan-20230103112157.jpg', temperament: ['Affectionate', 'Quiet', 'Playful', 'Curious', 'Independent'] },
  { id: 18, name: 'Nala', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Cross-Breed', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/09/IMG-20240917-WA0035.jpg', temperament: ['Loyal', 'Playful', 'Obedient', 'Energetic', 'Friendly'] },
  { id: 19, name: 'Oliver', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Cross-Breed', price: 250, photo: 'https://www.asdsingapore.com/assets/images/adopts/titus-1736.jpg', temperament: ['Gentle', 'Independent', 'Loyal', 'Affectionate', 'Quiet'] },
  { id: 20, name: 'Toby', type: 'Cat', ageGroup: 'Adult', gender: 'Male', breed: 'Local', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240829-WA0061.jpg', temperament: ['Playful', 'Energetic', 'Affectionate', 'Loyal', 'Obedient'] },
  { id: 21, name: 'Scout', type: 'Dog', ageGroup: 'Adult', gender: 'Female', breed: 'X-breed', price: 80, photo: 'https://www.asdsingapore.com/assets/images/adopts/lucky-b-20220327145734.jpg', temperament: ['Loyal', 'Playful', 'Energetic', 'Affectionate', 'Obedient'] },
  { id: 22, name: 'Simba', type: 'Cat', ageGroup: 'Senior', gender: 'Male', breed: 'local', price: 25, photo: 'https://spca.org.sg/wp-content/uploads/2024/03/CatDusty-20240315-2.jpg', temperament: ['Playful', 'Energetic', 'Gentle', 'Obedient', 'Loyal'] },
  { id: 23, name: 'Winnie', type: 'Dog', ageGroup: 'Puppy', gender: 'Female', breed: 'Cross-Breed', price: 250, photo: 'https://www.asdsingapore.com/assets/images/adopts/niu-niu-20230125173841.jpg', temperament: ['Active', 'Loyal', 'Playful', 'Obedient', 'Affectionate'] },
  { id: 24, name: 'Mimi', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Local', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2023/01/20220927_AH156282_1-scaled.jpg', temperament: ['Curious', 'Playful', 'Energetic', 'Independent', 'Affectionate'] }
];

const AdoptForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+65 ",
    appointmentDate: "",
    cardName: "",
    cardNum: "",
    expMonth: "",
    expYear: "",
    cvv: ""
  });

  // const useNav = useNavigate()

  const { id } = useParams(); // Get the id from the URL
  const animal = animals.find(a => a.id === parseInt(id)); // Find the animal by id
  console.log(animal);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.fromPage || 1;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Ensure the phone number starts with '+65 '
      if (!value.startsWith("+65 ")) return;

      const phoneNumber = value.slice(4);  // Remove the country code part
      // Check if the phone number is valid (only digits, and length should be at most 8)
      if (phoneNumber.length > 8 || !/^\d*$/.test(phoneNumber)) return;
    }

    if (name === "cardNum") {
      // Remove any non-digit characters (to prevent the user from typing letters or symbols)
      const cleanedValue = value.replace(/\D/g, '');

      // Format the cleaned value with hyphens every 4 digits
      const formattedValue = cleanedValue
        .replace(/(\d{4})(?=\d)/g, '$1-');  // Insert hyphens after every 4 digits

      // Update the state with the formatted value
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue
      }));
    } else {
      // For other inputs, update the state as usual
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
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
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Appointment Date is required.";
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("appointment_date", formData.appointmentDate)
      localStorage.setItem("selected_animal_id", animal.id);
      console.log("Form submitted:", formData);
      //window.location.href = "/dashboard/${id}`, { state: { fromPage } });"; 
      alert(`Thank you for adopting ${animal.name}!`);

      const fullName = JSON.parse(localStorage.getItem("currentUser")).fullName
      let allAppointmentDetails = JSON.parse(localStorage.getItem("all_appointment_details"))
      if (!allAppointmentDetails) {
        allAppointmentDetails = []
      }
      allAppointmentDetails.push({
        fullName: fullName,
        appointmentDate: formData.appointmentDate,
        animalID: animal.id
      })
      localStorage.setItem("all_appointment_details", JSON.stringify(allAppointmentDetails))

      navigate(`/dashboard/${animal.id}`, { state: { fromPage } });
    }
  };

  useEffect(() => {
    console.log("Value of Id: ", id)
  }, [])

  return (
    <>
      <div className="adopt-main-container">
        <div className="adopt-form1">
          {animal ? (
            <div className="adopt-container">
              <img src={animal.photo} alt={`${animal.name}`} />
              <div className="adopt-p">
                <p><strong>Name:</strong> {animal.name}</p>
                <p><strong>Type:</strong> {animal.type}</p>
                <p><strong>Age Group:</strong> {animal.ageGroup}</p>
                <p><strong>Breed:</strong> {animal.breed}</p>
                <p><strong>Adoption Price:</strong> ${animal.price}</p>
              </div>
            </div>
          ) : (
            <p>Animal not found. Please check the URL or go back to the animal listings page.</p>
          )}
        </div>

        <div className="adopt-form-container">
          <h2 className="adopt-form-heading">Adoption Form</h2>
          <form onSubmit={handleSubmit} className="adopt-form">
            <div className="adoptform-content">
              {/* Left Side: Detail Information */}
              <div className="form-left">
                <h3 className="adopt-title">Detail Information</h3>
                {/* Name */}
                <div className="adopt-form-field">
                  <label className="adopt-field-label" htmlFor="name" style={{ fontWeight: 'bold' }}>Full Name:</label>
                  {errors.name && <p className="error-text">{errors.name}</p>}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                    placeholder="Enter Full Name"
                  />
                </div>

                {/* Email */}
                <div className="adopt-form-field">
                  <label className="adopt-field-label" htmlFor="email">Email:</label>
                  {errors.email && <p className="error-text">{errors.email}</p>}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                    placeholder="Enter Email"
                  />
                </div>

                {/* Phone Number */}
                <div className="adopt-form-field">
                  <label className="adopt-field-label" htmlFor="phone">Phone Number:</label>
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                    placeholder="Enter Phone Number in format +65 XXXXXXXX"
                  />
                </div>

                {/* Appointment Date */}
                <div className="adopt-form-field">
                  <label className="adopt-field-label" htmlFor="appointmentDate">Book Appointment Date:</label>
                  {errors.appointmentDate && <p className="error-text">{errors.appointmentDate}</p>}
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              {/* Right Side: Payment Information */}
              <div className="form-right">
                <h3 className="adopt-title">Payment Information</h3>

                {/* Card Name */}
                <div className="inputBox">
                  <label className="adopt-field-label" htmlFor="cardName">Card Name:</label>
                  {errors.cardName && <p className="error-text">{errors.cardName}</p>}
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                    placeholder="Enter Card Name"
                  />
                </div>

                {/* Card Number */}
                <div className="inputBox">
                  <label className="adopt-field-label" htmlFor="cardNum">Credit Card Number:</label>
                  {errors.cardNum && <p className="error-text">{errors.cardNum}</p>}
                  <input
                    type="text"
                    id="cardNum"
                    name="cardNum"
                    value={formData.cardNum}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                    placeholder="1111-2222-3333-4444"
                    maxLength="19"
                  />
                </div>

                {/* Expiry Month */}
                <div className="inputBox">
                  <label className="adopt-field-label" htmlFor="expMonth">Exp Month:</label>
                  {errors.expMonth && <p className="error-text">{errors.expMonth}</p>}
                  <select
                    id="expMonth"
                    name="expMonth"
                    value={formData.expMonth}
                    onChange={handleChange}
                    required
                    className="adopt-input-field"
                  >
                    <option value="">Month</option>
                    {[...Array(12).keys()].map((month) => (
                      <option key={month} value={String(month + 1).padStart(2, '0')}>
                        {String(month + 1).padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Expiry Year */}
                <div className="exp-cvv-container">
                  {/* Expiry Year */}
                  <div className="inputBox1">
                    <label className="adopt-field-label" htmlFor="expYear">Exp Year:</label>
                    {errors.expYear && <p className="error-text">{errors.expYear}</p>}
                    <select
                      id="expYear"
                      name="expYear"
                      value={formData.expYear}
                      onChange={handleChange}
                      required
                      className="adopt-input-field"
                    >
                      <option value="">Year</option>
                      {[...Array(10).keys()].map((year) => (
                        <option key={year} value={new Date().getFullYear() + year}>
                          {new Date().getFullYear() + year}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CVV */}
                  <div className="inputBox1">
                    <label className="adopt-field-label" htmlFor="cvv">CVV:</label>
                    {errors.cvv && <p className="error-text">{errors.cvv}</p>}
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      className="adopt-input-field"
                      placeholder="Enter CVV"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
              <div className="inputBox2">
                <label className="adopt-field-label1" htmlFor="card-icons">Accepted Cards:</label>
                <div className="card-icons">
                  <img src="https://cdn-icons-png.flaticon.com/128/15398/15398050.png" alt="Visa" className="card-icon" />
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968299.png" alt="MasterCard" className="card-icon" />
                  <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="American Express" className="card-icon" />
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Discover" className="card-icon" />
                </div>
              </div>
            </div>

            <div className="adopt-submit">
              <button type="submit" className="adopt-submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdoptForm;
