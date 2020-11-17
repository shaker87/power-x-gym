import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import youtube from '../../../Image/bxl-youtube.png';
import facebook from '../../../Image/bxl-facebook.png';
import instagram from '../../../Image/bxl-instagram.png';
import twitter from '../../../Image/bxl-twitter.png';
import whatsapp from '../../../Image/bxl-whatsapp.png';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="#" class="navbar-brand">POWER <span className="brand-highlight">X</span></Link>
                    </div>
                    <div className="col-md-2">
                        <h5>Need Help?</h5>
                        <Link to="#" className="text-white">Help Center</Link><br/>
                        <Link to="#" className="text-white">Email Support</Link><br/>
                        <Link to="#" className="text-white">Live Chat</Link><br/>
                        <Link to="#" className="text-white">Gift Certificate</Link><br/>
                        <Link to="#" className="text-white">Send Us Feedback</Link><br/>
                    </div>
                    <div className="col-md-2">
                        <h5>Digital Resource</h5>
                        <Link to="#" className="text-white">Articles</Link><br/>
                        <Link to="#" className="text-white">E-books</Link><br/>
                    </div>
                    <div className="col-md-2">
                        <h5>Connect with us</h5>
                        <Link to="#" className="mr-2"><img src={youtube} alt="" srcset=""/></Link>
                        <Link to="#" className="mr-2"><img src={facebook} alt="" srcset=""/></Link>
                        <Link to="#" className="mr-2"><img src={instagram} alt="" srcset=""/></Link>
                        <Link to="#" className="mr-2"><img src={twitter} alt="" srcset=""/></Link>
                        <Link to="#" className=""><img src={whatsapp} alt="" srcset=""/></Link><br/>
                        <Link to="#" className="text-white">Forums</Link>
                        
                    </div>
                    <div className="col-md-3">
                        <h5>Join our newsletter</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti corrupti est vel? Voluptate, provident at?</p>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h6>&copy;{new Date().getFullYear} by shaker hossain</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;