import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './PricingCategoryDetails.css';

const PricingCategoryDetails = ({ pricePlan }) => {
    const history = useHistory();
    const goToForm = () => {
        history.push("/membership")
    }
    return (
        <div className="col-md-4">
            <div className="price-box">
                <img className="background" src={pricePlan.imgURL} alt="" srcset="" />
                <div className="price-box-content">
                    <h5 style={{ color: 'yellow' }}>BIlled Monthly</h5>
                    <h2>{pricePlan.planName}</h2>
                    <h1 style={{ color: 'yellow', fontSize: '50px', fontWeight: 'bold' }}>${pricePlan.price}</h1>
                    {
                        pricePlan.facility.map(facilities => <li style={{ listStyle: 'none', paddingBottom: '10px' }}><FontAwesomeIcon className="mr-2" icon={faCheck} />{facilities}</li>)
                    }

                    <button onClick={goToForm} className="custom-button mt-5">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCategoryDetails;