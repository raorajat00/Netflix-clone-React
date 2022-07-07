import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <div className='footer-section'>
        <div className='footer-wrapper'>
        <div className='footer-text'> Questions? Call 000-800-040-1843 </div>
        <div className='footer-wrapper-grid'>
            <div className='footer-column'>
                <FooterLink> FAQ </FooterLink>
                <FooterLink> Investor Relation </FooterLink>
                <FooterLink> Privacy </FooterLink>
                <FooterLink> SpeedTest </FooterLink>
            </div>
            <div className='footer-column'>
                <FooterLink> Help Center </FooterLink>
                <FooterLink> Jobs </FooterLink>
                <FooterLink> Cookie Preferences </FooterLink>
                <FooterLink> Legal Notices</FooterLink>
            </div>
            <div className='footer-column'>
                <FooterLink> Account </FooterLink>
                <FooterLink> Ways to Watch </FooterLink>
                <FooterLink> Corporate Information </FooterLink>
                <FooterLink> Only on Netflix</FooterLink>
            </div>
            <div className='footer-column'>
                <FooterLink> Media Centre  </FooterLink>
                <FooterLink> Terms of Use </FooterLink>
                <FooterLink> Contact Us  </FooterLink>
            </div>
         </div>
      </div>
    </div>
  )
}

export default FooterComponent;