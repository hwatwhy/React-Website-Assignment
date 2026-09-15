import React, { useState } from 'react';
import "./Contact_us.css";
import heroImage from './Photo/Contact_Us.png';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [openQuestion, setOpenQuestion] = useState(null); // Track which FAQ question is open
  const [errors, setErrors] = useState({}); // To store error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new errors object
    const newErrors = {};

    // Validation checks
    if (!name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    // If errors are found, update the error state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log("Form submitted successfully!");

    // Optionally reset the form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  // Toggle FAQ answer visibility
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="contact-us-hero">
        <img src={heroImage} alt="Hero" className="contact-us-hero-image" />
        <div className="contact-us-hero-text">
          <p>We love to hear from you!!!</p>
          <p>Reach out with any questions or feedback.</p>
        </div>
      </div>

      <div className="contact-us-container">
        {/* Map Section */}
        <div className="contact-us-map-section">
          <h2>Find Us Here</h2>
          <div className="contact-us-map-container">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.5914000770063!2d103.72943057322013!3d1.3807261614794824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11defc4b800b%3A0x8545a6baad621d8d!2s50%20Sungei%20Tengah%20Rd%2C%20Singapore%20699012!5e1!3m2!1sen!2ssg!4v1730018511934!5m2!1sen!2ssg"
              width="500"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-us-form-section">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="contact-us-form-group">
              <label htmlFor="name">Name:</label>
              {errors.name && <span className="error-message">{errors.name}</span>}
              <input
                placeholder='Enter Name'
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="email">Email:</label>
              {errors.email && <span className="error-message">{errors.email}</span>}
              <input
                placeholder='Enter Email'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="subject">Subject:</label>
              {errors.subject && <span className="error-message">{errors.subject}</span>}
              <input
                placeholder='Enter Subject'
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="message">Message:</label>
              {errors.message && <span className="error-message">{errors.message}</span>}
              <textarea
                placeholder='Enter Message'
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <section>
        <div className="contact-us-faq">
          <h2 className="contact-us-faq-title">Frequently Asked Questions</h2>

          <details className='contact-us-faq-item'>
            <summary className="contact-us-faq-question">What is the Adoption Fee?<span className="contact-us-arrow">&#9660;</span></summary>
            <div className="contact-us-faq-answer">
              <p><strong>Dogs:</strong></p>
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Singapore Specials – Local Mixed Breed Puppies (Under 6 months)</span>
                  <strong>$250</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Singapore Specials – Local Cross Breed Adults (6 months to under 7.5 years)</span>
                  <strong>$150</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Pedigrees and Crosses (Under 7.5 years)</span>
                  <strong>$350</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Seniors (Above 7.5 years OR stayed in SPCA for over a year)</span>
                  <strong>$70</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Dogs with Special Needs OR require Long Term Medical Care</span>
                  <strong>$25</strong>
                </li>
              </ul>
              <small>Note: Fees cover vaccination, sterilisation, deworming, and microchipping with registration. Price excludes AVS dog licensing fee.</small>

              <p><strong>Cats:</strong></p>
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Local Kittens (Under 6 months)</span>
                  <strong>$100</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Local Cats (6 months to under 7.5 years)</span>
                  <strong>$80</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Pedigrees and Crosses and Long Fur Cats (Under 7.5 years)</span>
                  <strong>$200</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }} >
                  <span>Seniors (Above 7.5 years OR stayed in SPCA for over a year OR Special Needs, require Long-Term Medical Care)</span>
                  <strong>$25</strong>
                </li>
              </ul>
              <small>Note: Fees cover vaccination, sterilisation, deworming, and microchipping with registration.</small>
            </div>
          </details>

          <details className='contact-us-faq-item'>
            <summary className="contact-us-faq-question">How Can I Adopt an Animal?<span className="contact-us-arrow">&#9660;</span></summary>
            <div className="contact-us-faq-answer">
              <p>To adopt, please visit our center or complete the adoption application on our website.</p>
              <p> We’ll arrange a meet-and-greet session for you and your potential new pet!</p>
            </div>
          </details>

          <details className='contact-us-faq-item'>
            <summary className="contact-us-faq-question">Can I adopt an animal if I’m a Singaporean PR?<span className="contact-us-arrow">&#9660;</span></summary>
            <div className="contact-us-faq-answer">
              <p>Yes! Singaporean PRs can adopt from us.</p>
              <p>If your NRIC does not reflect the address where your pet will be kept, do bring a tenancy agreement or utility bill for that premise.</p>
              <small>Note: if you stay in an HDB apartment, you can only adopt HDB-approved dogs.</small>
            </div>
          </details>
        </div>
      </section>

    </>
  );
};

export default ContactUs;
