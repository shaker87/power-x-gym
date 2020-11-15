import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4">
            <div className="service-box">
                <img className="background" src={service.background} alt="" srcset="" />
                <div className="box-content">
                    <img src={service.icon} alt="" srcset="" />
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;