import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link to="#" class="navbar-brand">POWER <span className="brand-highlight">X</span></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Our Classes</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
          
        </div>
    );
};

export default Navbar;