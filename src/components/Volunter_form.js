import React, { useState, useRef } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import "./Volunter_form.css";

const Volunter_form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+65 ",
    age: "",
    address: "",
    date: "",
    roles: "",
    startDate: "",
    endDate: ""
  });

  const [errors, setErrors] = useState({});
  const volunteerFormRef = useRef(null);

  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.fromPage || 1;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone Number Handling
    if (name === "phone") {
      if (value.startsWith("+65 ") && /^\+65 \d{0,8}$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
      return;
    }

    // General Case
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const scrollToForm = () => {
    volunteerFormRef.current.scrollIntoView({ behavior: 'smooth' });
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Store formData as a stringified object

      const detailsKey = 'all_volunteer_details'
      let volunteerDetails = JSON.parse(localStorage.getItem(detailsKey))
      if (!volunteerDetails) {
        volunteerDetails = []
      }
      volunteerDetails.push({
        name: formData.name,
        roles: formData.roles,
        startDate: formData.startDate,
        endDate: formData.endDate
      })
      localStorage.setItem(detailsKey, JSON.stringify(volunteerDetails));

      console.log("Form submitted:", formData);
      alert("Thank you for volunteering!");
      //window.location.href = "/"; // Redirect after showing the alert
      navigate(`/dashboard`, { state: { fromPage } });
    }
  };

  return (
    <>
      <div className='hero-section4'>
        <img src="https://www.allaboutpetsprovo.com/wp-content/uploads/2019/11/volunteer-animal-shelter.jpg" alt="Hero" className="hero-image4" />
        <div className='hero-content4'>
          <h3 className='hero4'>Make a Difference Today Join Our Volunteer Team!</h3>
          <button onClick={scrollToForm} className="hero-button4">Volunter Now</button>
        </div>
      </div>

      <h1 className="volunter-title">Volunteering at Pet Heaven</h1>

      <div className="volunter-content">
        <div>
          <h2>Why Volunteer at Pet Heaven?</h2>
          <p>
            <p>Volunteering at Pet Heaven offers a fulfilling experience for anyone who loves animals and wants to contribute to their well-being. </p>
            <p>Here are some reasons to join us:</p>
            <ul>
              <li><strong>Make a Difference:</strong> Every hour you spend with us has a direct, positive impact on the lives of rescued animals.</li>
              <li><strong>Gain Experience:</strong> From animal care to event planning, there are many ways to develop new skills and gain valuable experience.</li>
              <li><strong>Flexible Hours:</strong> We offer a variety of shifts, making it easy to volunteer alongside your studies, work, or other commitments.</li>
              <li><strong>Community & Fun:</strong> Meet other animal lovers, work together as a team, and form lifelong friendships.</li>
            </ul>
          </p>
        </div>
        <br></br>
        <div>
          <h2>Volunteer Benefits</h2>
          <p>
            <ul>
              <li><strong>Training and Mentorship:</strong> All volunteers receive training, including animal handling and care techniques, as well as ongoing mentorship from experienced team members.</li>
              <li><strong>Exclusive Discounts:</strong> Volunteers enjoy discounts on Pet Heaven’s pet supplies and services.</li>
              <li><strong>Letters of Recommendation:</strong> For volunteers committing 50+ hours, we offer recommendation letters to assist with college applications, job opportunities, or future volunteer work.</li>
              <li><strong>Recognition Events: </strong>Every quarter, we celebrate our volunteers with an appreciation event, where we honor standout contributors and their efforts.</li>
            </ul>
          </p>
        </div>
        <br></br>
        <h2>Interested in joining the Pet Heaven family</h2>
        <p>
          <p><strong>Here’s How to Apply:</strong></p>
          <ul>
            <li>Submit an Application: Complete our volunteer application form on our website.</li>
            <li>Attend Orientation: New volunteers must attend an orientation to learn about our policies and meet the team.</li>
            <li>Start Volunteering: Choose the role that best suits you and your availability. Training will be provided for all positions.</li>
          </ul>
        </p>

      </div>

      <div className="volunter-content">
        <h2>Type of Volunter Roles</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Description</th>
              <th>Requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Animal Care Assistant</td>
              <td>Help feed, groom, and exercise pets; clean enclosures and provide socialization for animals.</td>
              <td>Must be 16 above, Able to lift 20 lbs, Training provided</td>

            </tr>
            <tr>
              <td>Dog Walker</td>
              <td>Take dogs on daily walks, ensuring they get exercise and socialization outside their enclosures.</td>
              <td>Must be 18 above, Comfortable with dogs </td>
            </tr>
            <tr>
              <td>Cat handler</td>
              <td> Assist with feeding, Keep the cat enclosures clean and tidy and Spend time interacting with cats to help them adjust to humans.</td>
              <td>Must be 18 above, Comfortable with Cats </td>
            </tr>
            <tr>
              <td>Event Volunteer</td>
              <td>Assist with fundraising events, adoption fairs, and educational workshops on pet care.</td>
              <td>Outgoing personality, Ability to work in teams</td>
            </tr>
            <tr>
              <td>Foster Care Provider</td>
              <td>Temporarily care for animals in your home, providing love and a safe environment.</td>
              <td>Home check required, Must 18 above</td>

            </tr>

            <tr>
              <td>Veterinary Assistant</td>
              <td>Support our on-site vet by helping with minor procedures, paperwork, and medical supplies.</td>
              <td>Must be 18 above, Training provided</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={volunteerFormRef} className="volunteer-form-container">
        <h2 className="volunteer-form-heading">Volunteer Form</h2>
        <form onSubmit={handleSubmit} className="volunteer-form">

          <div className="volunteer-form-content">
            {/* Left Side: Detail Information */}
            <div className="form-left">
              <h3 className="volunteer-title">Detail Information</h3>

              {/* Form Rows for Side-by-Side Fields */}
              <div className="volunteer-form-row">
                {/* Name */}
                <div className="volunteer-form-field">
                  <label className="volunteer-field-label" htmlFor="name" style={{ fontWeight: 'bold' }}>Full Name:</label>
                  {errors.name && <p className="error-text">{errors.name}</p>}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="volunteer-input-field"
                    placeholder="Enter Full Name"
                  />
                </div>

                {/* Age */}
                <div className="volunteer-form-field">
                  <label className="volunteer-field-label" htmlFor="age" style={{ fontWeight: 'bold' }}>Age:</label>
                  {errors.age && <p className="error-text">{errors.age}</p>}
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="volunteer-input-field"
                  >
                    <option value="">Select Age</option>
                    {[...Array(85).keys()].map((age) => (
                      <option key={age} value={age + 16}>{age + 16}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="volunteer-form-row">
                {/* Email */}
                <div className="volunteer-form-field">
                  <label className="volunteer-field-label" htmlFor="email">Email:</label>
                  {errors.email && <p className="error-text">{errors.email}</p>}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="volunteer-input-field"
                    placeholder="Enter Email"
                  />
                </div>

                {/* Phone */}
                <div className="volunteer-form-field">
                  <label className="volunteer-field-label" htmlFor="phone">Phone Number:</label>
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="volunteer-input-field"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              <div className="volunteer-form-row">
                {/* Date of Birth */}
                <div className="volunteer-form-field">
                  <label className="volunteer-field-label" htmlFor="dob" style={{ fontWeight: 'bold' }}>
                    Date of Birth:
                  </label>

                  {/* Error message */}
                  {errors.dob && <p className="error-text">{errors.dob}</p>}

                  <div className="dob-container">
                    {/* Day Selector */}
                    <select
                      id="dob-day"
                      name="dob-day"
                      value={formData.dobDay}
                      onChange={handleChange}
                      required
                      className="volunteer-input-field2"
                    >
                      <option value="">Day</option>
                      {[...Array(31).keys()].map((day) => (
                        <option key={day} value={day + 1}>{day + 1}</option>
                      ))}
                    </select>

                    {/* Month Selector */}
                    <select
                      id="dob-month"
                      name="dob-month"
                      value={formData.dobMonth}
                      onChange={handleChange}
                      required
                      className="volunteer-input-field2"
                    >
                      <option value="">Month</option>
                      {[...Array(12).keys()].map((month) => (
                        <option key={month} value={month + 1}>
                          {new Date(0, month).toLocaleString('en', { month: 'short' })}
                        </option>
                      ))}
                    </select>

                    {/* Year Selector */}
                    <select
                      id="dob-year"
                      name="dob-year"
                      value={formData.dobYear}
                      onChange={handleChange}
                      required
                      className="volunteer-input-field2"
                      max={new Date().getFullYear()}
                    >
                      <option value="">Year</option>
                      {[...Array(100).keys()].map((year) => (
                        <option key={year} value={new Date().getFullYear() - year}>
                          {new Date().getFullYear() - year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>


                {/* Address */}
                <div className="volunteer-form-field">
                  <label className="volunteer-field-label" htmlFor="address" style={{ fontWeight: 'bold' }}>Address:</label>
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
            </div>
          </div>


          {/* Type of Volunteer Roles */}
          <div className="volunteer-form-field">
            <label className="volunteer-field-label1" style={{ fontWeight: 'bold', color: "darkblue" }}><h3>Type of Volunteer Roles:</h3></label>
            {errors.role && <p className="error-text">{errors.role}</p>}

            <div className="volunteer-radio-group">
              <div className="volunteer-radio-option">
                <input
                  type="radio"
                  id="role-Animal Care Assistant"
                  name="roles"
                  value="Animal Care Assistant"
                  checked={formData.roles === "Animal Care Assistant"}
                  onChange={handleChange}
                  required
                  className="volunteer-radio-button"
                />
                <label htmlFor="role-Animal Care Assistant">Animal Care Assistant</label>
              </div>

              <div className="volunteer-radio-option">
                <input
                  type="radio"
                  id="role-Dog Walker"
                  name="roles"
                  value="Dog Walker"
                  checked={formData.roles === "Dog Walker"}
                  onChange={handleChange}
                  required
                  className="volunteer-radio-button"
                />
                <label htmlFor="role-Dog Walker">Dog Walker</label>
              </div>

              <div className="volunteer-radio-option">
                <input
                  type="radio"
                  id="role-Cat-handler"
                  name="roles"
                  value="Cat handler"
                  checked={formData.roles === "Cat handler"}
                  onChange={handleChange}
                  required
                  className="volunteer-radio-button"
                />
                <label htmlFor="role-Cat-handler">Cat handler</label>
              </div>


              <div className="volunteer-radio-option">
                <input
                  type="radio"
                  id="role-Event Volunteer"
                  name="roles"
                  value="Event Volunteer"
                  checked={formData.roles === "Event Volunteer"}
                  onChange={handleChange}
                  required
                  className="volunteer-radio-button"
                />
                <label htmlFor="role-Event Volunteer">Event Volunteer</label>
              </div>

              <div className="volunteer-radio-option">
                <input
                  type="radio"
                  id="role-Foster Care Provider"
                  name="roles"
                  value="Foster Care Provider"
                  checked={formData.roles === "Foster Care Provider"}
                  onChange={handleChange}
                  required
                  className="volunteer-radio-button"
                />
                <label htmlFor="Foster Care Provider">Foster Care Provider</label>
              </div>

              <div className="volunteer-radio-option">
                <input
                  type="radio"
                  id="role-Veterinary Assistant"
                  name="roles"
                  value="Veterinary Assistant"
                  checked={formData.roles === "Veterinary Assistant"}
                  onChange={handleChange}
                  required
                  className="volunteer-radio-button"
                />
                <label htmlFor="Veterinary Assistant">Veterinary Assistant</label>
              </div>

            </div>
          </div>

          <div className="volunteer-form-dates">
            {/* Start Date */}
            <div className="volunteer-form-field">
              <label className="volunteer-field-label" htmlFor="startDate">Start Date:</label>
              {errors.startDate && <p className="error-text">{errors.startDate}</p>}
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="volunteer-input-field"
                placeholder="Select Start Date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* End Date */}
            <div className="volunteer-form-field">
              <label className="volunteer-field-label" htmlFor="endDate">End Date:</label>
              {errors.endDate && <p className="error-text">{errors.endDate}</p>}
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="volunteer-input-field"
                placeholder="Select End Date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>




          <div className="volunteer-submit">
            <button type="submit" className="volunteer-submit-btn">Submit</button>
          </div>

        </form >
      </div >
    </>
  );
};

export default Volunter_form;
