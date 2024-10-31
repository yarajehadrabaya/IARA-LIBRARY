import React from 'react';
import './Footer.css'; // لاستدعاء ملف التنسيق
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="left-side" id="contact-us">
            
            {/* <img  src="img/logo2.png" alt="logo" id="logo" /> */}
            <h1 id="logo" >IARA</h1>
            
            <div>
              <img src="img/email.svg" alt="email-icon" />
              <a href="mailto:iiaarraa2024@gmail.com">iiaarraa2024@gmail.com</a>
            </div>
            <div>
              <img src="img/phone.svg" alt="phone-icon" />
              <a href="tel:+123 456 78910">+123 456 78910</a>
            </div>
            <div>
              <img src="img/location.svg" alt="location-icon" />
              <a
                href="https://latitude.to/map/ps/palestine/cities/janin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Somewhere in the World
              </a>
            </div>
          </div>
          <div id="impty-div"></div>
          <nav>
            <ul id="home-list">
              <li> <Link to="/">Home</Link></li>
              <li>  <Link to="/">book-categories</Link> </li>
              <li><Link to="/"> Our Books</Link></li>
              <li><Link to="/"> Our Testimonials</Link>  </li>
              <li>  <Link to="/">Find your book</Link> </li>
            </ul>
          </nav>
          <nav>
            <ul id="about-us-list">
              <li><Link to="/about">About Us</Link></li>
              
              <li><Link to="/about">Company</Link></li>
              <li><Link to="/about">Achievements</Link></li>
              <li><Link to="/about">Our Goals</Link></li>
            </ul>
          </nav>
          <div className="social-media">
            <p>Social Profiles</p>
            <div className="social-media-icons">
              <img src="/img/facebook.svg" alt="facebook-icon" />
              <img src="/img/twitter.svg" alt="twitter-icon" />
              <img src="/img/linkedin.svg" alt="linkedin-icon" />
            </div>
            
          </div>
          <div className="copy-right">
            <p>© 2024 Iara Library System.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
