import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./release_form.css";

const ReleaseForm = () => {
  const [formData, setFormData] = useState({
    animalName: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    ownername: '', // Owner name state
    phone: '+65 ',
    releaseDate: '',
    releaseReason: '', // Added state for release reason
    otherReason: '',  // State for other reason input
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use the navigate hook

  // Handle form field changes
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Ensure the phone number starts with '+65 '
      if (!value.startsWith("+65 ")) return;

      const phoneNumber = value.slice(4); // Remove the country code part
      // Check if the phone number is valid (only digits, and length should be at most 8)
      if (phoneNumber.length > 8 || !/^\d*$/.test(phoneNumber)) return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Validate animal name
    if (!formData.animalName.trim()) {
      newErrors.animalName = "Animal Name is required.";
    }

    // Validate breed
    if (!formData.breed.trim()) {
      newErrors.breed = "Please provide the animal breed.";
    }

    // Validate owner name
    if (!formData.ownername.trim()) {
      newErrors.ownername = "Owner Name is required.";
    }
    
    // Validate phone number
    const phonePattern = /^\+65 \d{8}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter Valid phone number (+65 XXXXXXXX).";
    }

    // Validate release reason (if "Others" selected, check for custom reason)
    if (formData.releaseReason === 'Others' && !formData.otherReason.trim()) {
      newErrors.otherReason = "Please specify the other reason.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data Submitted:', formData);

      alert('The pet has been successfully released to Pet Heaven. Thank you for your love and care.');

      // Navigate to another page (e.g., /success)
      navigate('/'); // Replace '/success' with your desired route
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <>
      <h1 className="release-title">Pet Heaven Release Form</h1>
      
      <div className="release-content">
        <div>
          <h2>Why Send to Us Instead of Letting Them Live on the Streets?</h2>
          <p>
            <ol>
              <li><strong>Safety and Security:</strong> On the streets, animals face numerous dangers, including traffic accidents, malnutrition, exposure to extreme weather, and potential abuse. At PetHeaven, we provide a safe and secure environment for pets, where they are cared for, fed, and protected.</li>
              <li><strong>Health and Medical Care:</strong> Stray animals are at risk of illness and injury, which may go untreated. PetHeaven provides veterinary care, vaccinations, and necessary medical treatments to ensure the animals are healthy and thriving. Pets on the streets are often exposed to diseases and parasites, which can spread quickly and cause long-term damage.</li>
              <li><strong>Emotional Well-being:</strong> Animals living on the streets often suffer from stress, anxiety, and fear due to their environment. At PetHeaven, we offer a nurturing environment where pets can receive emotional support, socialization, and love from our trained staff.</li>
              <li><strong>Finding a Forever Home:</strong> Strays rarely find their way to loving, responsible homes. PetHeaven works tirelessly to connect animals with adoptive families who are ready to provide them with a lifetime of care. By sending pets to us, you increase their chances of being placed in a safe and loving environment.</li>
              <li><strong>Community Responsibility:</strong> Sending pets to PetHeaven helps to prevent the overpopulation of stray animals. Through our adoption programs, we work to reduce the number of homeless animals and promote responsible pet ownership within the community.</li>
            </ol>
          </p>
        </div>
      </div>

      <div className="release-form-container">
        <h1 className="release-form-heading">Animal Release Form</h1>
        <form onSubmit={handleSubmit} className="release-form">
          
          <div className="release-form-left">
            {/* Animal Name Input */}
            <div className="release-form-field">
            <h3>Animals details</h3>
              <label className="release-field-label">
                Animal Name:
                <input
                  type="text"
                  name="animalName"
                  value={formData.animalName}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                  placeholder="Enter Animal Name"
                />
              </label>
              {errors.animalName && <div className="error-message">{errors.animalName}</div>}
            </div>

            {/* Species Dropdown */}
            <div className="release-form-field">
              <label className="release-field-label">
                Species:
                <select
                  name="species"
                  value={formData.species}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                >
                  <option value="">Select Species</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="others">Others</option>
                </select>
              </label>
            </div>

            {/* Breed Input */}
            <div className="release-form-field">
              <label className="release-field-label">
                Breed:
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                  placeholder="Enter Animal Breed"
                />
              </label>
              {errors.breed && <div className="error-message">{errors.breed}</div>}
            </div>

            {/* Age Dropdown */}
            <div className="release-form-field">
              <label className="release-field-label">
                Age:
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                >
                  <option value="">Select age</option>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Gender Dropdown */}
            <div className="release-form-field">
              <label className="release-field-label">
                Gender:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>
          </div>

          <div className="release-form-right">
          <h3>Personal details</h3>
            {/* Owner Name Input */}
            <div className="release-form-field">
              <label className="release-field-label">
                Owner Name:
                <input
                  type="text"
                  name="ownername"
                  value={formData.ownername}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                  placeholder="Enter Owner Name"
                />
              </label>
              {errors.ownername && <div className="error-message">{errors.ownername}</div>}
            </div>

            {/* Phone Input */}
            <div className="release-form-field">
              <label className="release-field-label">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                  placeholder="Enter Phone Number"
                />
              </label>
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            {/* Reason for Release */}
            <div className="release-form-field">
              <label className="release-field-label">
                Reason for Release:
                <select
                  name="releaseReason"
                  value={formData.releaseReason}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                >
                  <option value="">Select Reason</option>
                  <option value="Unable to care">Unable to care</option>
                  <option value="Pet behavior problems">Pet behavior problems</option>
                  <option value="Pet no longer fits the lifestyle">Pet no longer fits the lifestyle</option>
                  <option value="Financial difficulties">Financial difficulties</option>
                  <option value="Others">Others</option>
                </select>
              </label>
            </div>

            {/* Other Reason Input - Show when "Others" selected */}
            {formData.releaseReason === "Others" && (
              <div className="release-form-field">
                <label className="release-field-label">
                  Please specify:
                  <input
                    type="text"
                    name="otherReason"
                    value={formData.otherReason}
                    onChange={handleChange}
                    className="release-input-field"
                    placeholder="Enter your reason"
                  />
                </label>
                {errors.otherReason && <div className="error-message">{errors.otherReason}</div>}
              </div>
            )}

            {/* Release Date Input */}
            <div className="release-form-field">
              <label className="release-field-label">
                Release Date:
                <input
                  type="date"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                  required
                  className="release-input-field"
                  min={new Date().toISOString().split("T")[0]}
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="release-form-actions">
            <button type="submit" className="release-submit-button">Submit</button>
          </div>

        </form>
      </div>

    </>
  );
};

export default ReleaseForm;
