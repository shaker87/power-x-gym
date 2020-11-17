import React from 'react';
import { useParams } from 'react-router-dom';
import fakeService from '../../fakeService/fakeService';
import Navbar from '../../Shared/Navbar/Navbar';
import './DetailsHeader.css';

const DetailsHeader = () => {
    const {courseId} = useParams();
    const course = fakeService.find(service=> service.id === courseId);
    return (
        <div className='class-header-style'>
            <Navbar></Navbar>
            <h1 className='text-center class-heading'>{course.name}</h1>
        </div>
    );
};

export default DetailsHeader;