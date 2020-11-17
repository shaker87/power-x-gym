import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './DetailsHeader.css';

const DetailsHeader = () => {
    return (
        <div className='class-header-style'>
            <Navbar></Navbar>
            <h1 className='text-center class-heading'>Advanced GYM</h1>
        </div>
    );
};

export default DetailsHeader;