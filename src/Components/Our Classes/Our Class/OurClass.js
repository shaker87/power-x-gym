import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ClassCategory from '../Class Category/ClassCategory';
import ClassesHeader from '../ClassesHeader/ClassesHeader';



const OurClass = () => {
    return (
        <div>
            <ClassesHeader></ClassesHeader>
            <ClassCategory></ClassCategory>
            <Footer></Footer>
        </div>
    );
};

export default OurClass;