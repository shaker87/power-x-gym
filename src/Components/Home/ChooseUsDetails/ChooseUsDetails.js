import React from 'react';
import './ChooseUsDetails.css';

const ChooseUsDetails = ({ chooseData }) => {
    return (
        <div className="col-md-4">
            <div className="choose-box">
                <img src={chooseData.icon} alt="" srcset="" />
                <h5>{chooseData.title}</h5>
                <p>{chooseData.description}</p>
            </div>
        </div>
    );
};

export default ChooseUsDetails;