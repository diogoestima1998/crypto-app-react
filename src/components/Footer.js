import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__socials">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="footer-content__text">
          <p>Privacy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
