import React, { useState } from 'react';
import fakeService from '../../fakeService/fakeService';
import Category from './Category/Category';
import './ClassCatagory.css';

const ClassCategory = () => {
    return (
        <div className='container class-category-style'>
           {
                           fakeService.map(category=><Category category={category}></Category>)
            }
        </div>
    );
};

export default ClassCategory;