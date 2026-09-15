import './Home.css';
import heroImage from './Photo/HomePage.jpg';
import { Link } from 'react-router-dom';
import adopt from './Photo/adopt.jpg';
import community from './Photo/community.png';
import donate from './Photo/donate.jpg';
import mission from './Photo/mission-icon.jpg';
import volunteer from './Photo/volunteer.jpg';
import petcare from './Photo/pet-care.jpg';
import appointment from './Photo/appointment.jpg';
import browse from './Photo/browse.jpg';
import show from './Photo/show up.jpg';
import Feedback from './Feedback';
import React, { useEffect, useRef } from 'react';

const CustomStatsWheel = ({ value, color, label }) => {
  const canvasRef = useRef(null);
  const radius = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background circle
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#e0e0e0';
    ctx.fill();

    // Draw the progress arc
    ctx.beginPath();
    const endAngle = (value / 100) * 2 * Math.PI - Math.PI / 2;
    ctx.arc(radius, radius, radius, -Math.PI / 2, endAngle);
    ctx.lineTo(radius, radius);
    ctx.fillStyle = color;
    ctx.fill();

    // Draw the percentage in the center
    ctx.fillStyle = 'black';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${value}%`, radius, radius);

    // Draw the label
    ctx.font = 'bold 18px Arial';
    ctx.fillText(label, radius, radius + 30);
  }, [value, color, label]);

  return <canvas ref={canvasRef} width={radius * 2} height={radius * 2} />;
};

const Home = () => {
  return (
    <div>
      <div className="hero">
        <img src={heroImage} alt="Hero" className="hero-image1" />
        <div className="hero-text">
          <div className="hero-content">
            <h3 className='hero-1'>Your new best friend is waiting for you!</h3>
            <Link to="/Adopt_us">
              <button className="hero-button">Adopt Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className='about-title'>About Us - Pet Heaven</h2>
        <p>Welcome to Pet Heaven, a loving sanctuary dedicated to finding forever homes for our furry friends! Our mission is to create a warm and welcoming environment where pets of all shapes and sizes can thrive until they meet their perfect match.</p>

        <h3 className='services-title1'>Our Mission:</h3>
        <p>At Pet Heaven, we give every animal a second chance at happiness. Our team of dedicated volunteers and animal lovers provides love, socialization, and medical care, treating each pet as a cherished family member.</p>

        <h3 className='services-title1'>Commitment to Happiness:</h3>
        <p>We host regular adoption events where prospective pet parents can meet our adorable residents and discover their unique personalities. Whether you’re looking for a playful puppy, a gentle kitten, or a wise old friend, we have a companion ready to fill your life with love and joy.</p>

        <h3 className='services-title1'>Get Involved:</h3>
        <p>Join us in making a difference! Visit our adoption events or volunteer with us to help provide these loving pets with the care they deserve.</p>

      </div>

      <hr></hr>

      <div className="stats-container">
        <h2 className='stats-title'>Our Adoption Stats for 2023</h2>
        <div className='stats-content'>
          <p>"In 2023, Pet Heaven proudly celebrated over 300 successful pet adoptions, connecting countless animals with their forever families and supporting the community in bringing pets into loving homes.</p> 

          <p>From playful puppies and kittens to more mature dogs and cats, as well as small mammals, birds, and reptiles, our mission continues to be about providing a safe haven for all kinds of animals in need of a loving home.</p>

          <p>Below, you can see the types of animals that have been adopted from us, showcasing the diversity of pets that have found their perfect match:</p>
        </div>
        <div >
          <CustomStatsWheel value={55} color="#ff6b6b" label="Dog Adoptions" />
        </div>
        <div>
          <CustomStatsWheel value={45} color="#4dabf5" label="Cat Adoptions" />
        </div>
        <div>
          <CustomStatsWheel value={10} color="#a1e3a1" label="Other Animals" />
        </div>


      </div>

      <hr></hr>

      <div className="services">
        <h2 className='services-title'>Our Services</h2>

        <div className='services1'>
          <h3 className='services-title'>At Pet Heaven, we offer a range of services to support our furry friends and the community:</h3>
        </div>

        <div className='services-items'>
          <img src={adopt}
            alt="Adoption Icon"
            className="adopt" />
          <h3>Adoption Services:</h3>
          <p>We facilitate the adoption process, matching pets with loving families. Each pet undergoes a thorough health check and behavioral assessment to ensure a great fit.</p>
        </div>


        <div className='services-items'>
          <img src={mission} alt="mission-icon" className="mission" />
          <h3>Foster Care Program:</h3>
          <p> We recruit and train volunteers to provide temporary homes for pets in need, giving them a nurturing environment while they wait for their forever homes.</p>
          <p><strong>Get Involved:</strong> Interested in fostering? Learn more about the requirements and how to apply.</p>
        </div>

        <div className='services-items'>
          <img src={petcare} alt="petcare-icon" className="petcare" />
          <h3>Pet Care Education:</h3>
          <p> We offer workshops and resources for new pet owners, covering essential topics like training, nutrition, and healthcare to promote responsible pet ownership.</p>
          <p><strong>Join us for <em>Positive Training Techniques</em></strong> to build trust and encourage good behavior using positive reinforcement. Perfect for pet owners at any level!</p>
        </div>

        <div className='services-items'>
          <img src={community} alt="community-icon" className="community" />
          <h3>Community Outreach: </h3>
          <p>We organize events and programs to raise awareness about animal welfare, including spay/neuter initiatives and responsible pet ownership campaigns.</p>
          <p><strong>Join Us at Adoption Fairs!</strong> Meet adoptable pets and discover how you can provide them with a loving home.</p>
        </div>

        <div className='services-items'>
          <img src={volunteer} alt="volunteer-icon" className="volunteer" />
          <h3>Volunteer Opportunities: </h3>
          <p>We welcome animal lovers to join our team, offering various volunteering options, from caring for pets to assisting with events and outreach efforts.</p>
        </div>

        <div className='services-items'>
          <img src={donate} alt="donate-icon" className="donate" />
          <h3>Pet Supply Donations:</h3>
          <p> We accept donations of food, toys, and other pet supplies to support our residents and foster families, ensuring every animal receives the care they deserve.</p>
        </div>

      </div>
      <hr></hr>

      <div className='working'>
        <h2 className='working-title'>How the adoption works</h2>
        <p className='working-content'>
          Follow these simple steps to find your perfect pet and make the adoption process seamless!
        </p>

        <div className='steps-container'>
          <div className='step1'>
            <img src={browse} alt="browse-icon" className="browse" />
            <h3>Step 1: Browse our adoption gallery</h3>
            <p>Browse our wide selection of animals!</p>
          </div>

          <div className='step1'>
            <img src={appointment} alt="appointment-icon" className="appointment" />
            <h3>Step 2: Book appointment</h3>
            <p>All visits are strictly by Appointment .</p>
          </div>

          <div className='step1'>
            <img src={show} alt="show-icon" className="show" />
            <h3>Step 3: Show up for your appointment on time</h3>
            <p>The whole procedure should not take more than an hour.</p>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className='working'>
        <h2 className='working-title'>See What Our Adopters Say</h2>
        <div className='steps-container1'>
          <Feedback />
        </div>
      </div>



    </div>

  );
}

export default Home;
