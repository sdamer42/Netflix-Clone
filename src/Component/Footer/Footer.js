import React from 'react'
import "../../Component/Footer/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-1'>
            <p>Questions? Call 000-800-040-1843</p>
        </div>
        <div className='footer-2'>
            <div className='f1'>
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
                <button>Language</button>
            </div>
            <div className='f1'>
                <p>Help Cntre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div className='f1'>
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Informatoin</p>
                <p>Online on Netflix</p>
            </div>
            <div className='f1'>
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>
             
        </div>
    </div>
  )
}

export default Footer