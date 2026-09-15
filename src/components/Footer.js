import React,{useEffect} from 'react';
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link,useLocation } from 'react-router-dom';


const socialLinks = [
  {
    id: 1,
    icon: <FiFacebook />,
    url: "https://www.facebook.com",
    Text: "Facebook"
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: "https://twitter.com/",
    Text: "Twitter"
  },
  {
    id: 3,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/",
    Text: "Instagram"
  },
];

const Footer = () => {

  const location = useLocation(); // Get the current location

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='footer-container'>
      <div className="container1">

        <div className='contactus'>
          <h2 className='title'>CONTACT US</h2>
          <p><FaMapMarkerAlt />50 Sungei Tengah Road, Singapore 699012</p>
          <p><FaPhone />+65 6788 4343</p>
          <p><FaEnvelope /> enquiries@pet_heaven.org.sg</p>
        </div>

        <div className='container2'>
          <h2 className='title'>SITEMAP</h2>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/adopt_us">Adopt a Pet</Link>
              <Link to="/fundog">Pet Release</Link>
              <Link to="/volunter">Volunteer</Link>
              <Link to="/donation">Donations</Link>
              <Link to="/contact_us">Contact us</Link>
          </nav>
        </div>

        <div className="container3">
          <h2 className="title">
            SOCIAL MEDIA
          </h2>
          <ul className="link">
            {socialLinks.map((link) => (
              <a className='photo'
                href={link.url}
                target="_blank"
                key={link.id}
              >
                <i className="icon">{link.icon}</i>
                <p className='text1'>{link.Text}</p>
              </a>
            ))}
          </ul>
        </div>

        <div className="reserved">
            <p className="copyright">&copy; {new Date().getFullYear()} Pet Heaven. All rights reserved.</p>
            <p className="design">Designed by Muhammad Zafiq</p>
        </div>

      </div>
      <ScrollToTop className='button'
        smooth
        component={<FaAngleUp className='icon-position' />}
        style={{ backgroundColor: 'lightgray', borderRadius: '50%' }}
      />
    </div>
  );
};

export default Footer;
