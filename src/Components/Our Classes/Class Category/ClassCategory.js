import React from 'react';
import Category from './Category/Category';
import './ClassCatagory.css';

const ClassCategory = () => {
    const fakeService = [
        {id: '1', name: 'Psycho training', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia voluptates officiis at exercitationem nulla debitis dolorum vel voluptatibus illo!', url: 'https://i.ibb.co/CzjYZyJ/victor-freitas-Wv-DYd-XDzkhs-unsplash.jpg' },
        {id: '2', name: 'self defense', details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequatur. Vel quod temporibus suscipit accusantium tempora provident ex accusamus cupiditate.', url: 'https://i.ibb.co/mFZHCDw/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg' },
        {id: '3', name: 'Advanced gym', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum in nobis officia ipsa porro laborum! Ea placeat totam ex.', url: 'https://i.ibb.co/D9gNnsF/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg' },
        {id: '4', name: 'Cardio training', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor a officia impedit nesciunt illo iusto id quasi voluptatibus cumque.', url: 'https://i.ibb.co/Kj45gKD/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg' },
        {id: '5', name: 'Strength training', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore sit quaerat et totam nulla fugit, laudantium accusantium corporis aperiam.', url: 'https://i.ibb.co/GdgSZTm/john-fornander-FIu48iuo-4g-unsplash.jpg' },
        {id: '6', name: 'Psycho training', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius architecto aperiam tempora est sit. A amet accusantium sunt sit cum?', url: 'https://i.ibb.co/10d8P9Z/sven-mieke-Lx-GDv7-VA9-M-unsplash.jpg' }
    ]
    return (
        <div className='container class-category-style'>
           {
                fakeService.map(category=><Category category={category}></Category>)
            }
        </div>
    );
};

export default ClassCategory;