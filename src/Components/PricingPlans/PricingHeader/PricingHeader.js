import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './PricingHeader.css';

const PricingHeader = () => {
    return (
        <div className='class-header-style'>
            <Navbar></Navbar>
            <h1 className='text-center class-heading'>Pricing Plans</h1>
        </div>
    );
};

export default PricingHeader;