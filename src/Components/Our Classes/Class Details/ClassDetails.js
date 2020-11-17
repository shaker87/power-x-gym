import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CourseDetails from '../Course Details/CourseDetails';
import DetailsHeader from '../Details Header/DetailsHeader';

const ClassDetails = () => {
    return (
        <div>
            <DetailsHeader></DetailsHeader>
            <CourseDetails></CourseDetails>
            <Footer></Footer>
        </div>
    );
};

export default ClassDetails;