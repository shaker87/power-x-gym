import React from 'react';
import './Service.css';
import bg1 from '../../../Image/bg1.jpg'
import bg2 from '../../../Image/bg2.jpg';
import bg3 from '../../../Image/bg3.jpg';
import icon1 from '../../../Image/service-icon1.png';
import icon2 from '../../../Image/service-icon2.png';
import icon3 from '../../../Image/service-icon3.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Progression',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi. adipisicing elit. Dicta, excepturi.',
        background: bg1,
        icon: icon1
    },
    {
        name: 'Workout',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi. adipisicing elit. Dicta, excepturi.',
        background: bg2,
        icon: icon2
    },
    {
        name: 'Nutrition',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi. adipisicing elit. Dicta, excepturi.',
        background: bg3,
        icon: icon3
    }
]

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;