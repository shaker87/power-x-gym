import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './ClassesHeader.css';

const ClassesHeader = () => {
    return (
        <div className='class-header-style'>
            <Navbar></Navbar>
            <h1 className='text-center class-heading'>Our Classes</h1>
        </div>
    );
};

export default ClassesHeader;