import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { footerLinks } from '../constants';

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

      <div className='footer-wrap'>
          {footerLinks.map((footerLink)=>(
             <div key={footerLink.key} className='footer-column'>
              <h4 className='footer-header'>
                {footerLink.title}
              </h4>
              <ul className='footer-ul'>
                {footerLink.links.map((Link, index)=>(
                  <li key={Link.name} className={`footer-link`}>
                      {Link.name}
                  </li>

                ))}
              </ul>
             </div>
          ))}
        </div>
    </footer>
  );
}

export default Footer;
