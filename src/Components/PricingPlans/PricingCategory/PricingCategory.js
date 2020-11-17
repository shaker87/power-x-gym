import React from 'react';
import PricingCategoryDetails from '../PricingCategoryDetails/PricingCategoryDetails';
import './PricingCategory.css';

const PricingCategory = () => {
    const fakePricePlan = [
        {
            id: 1,
            planName: 'ADVANCE PLAN',
            price : 140,
            facility: [
                'MObile Optimizer', 'Best Hosting', 'Free Custom', 'Outstanding', 'Happy Customer'
            ],
            imgURL: 'https://iili.io/FAE5FI.jpg'
        },
        {
            id: 2,
            planName: 'BASIC PLAN',
            price : 120,
            facility: [
                'MObile Optimizer', 'Best Hosting', 'Free Custom', 'Outstanding', 'Happy Customer'
            ],
            imgURL:'https://iili.io/FAEXFS.jpg'
        },
        {
            id: 3,
            planName: 'BEGINNER',
            price : 90,
            facility: [
                'MObile Optimizer', 'Best Hosting', 'Free Custom', 'Outstanding', 'Happy Customer'
            ],
            imgURL:'https://iili.io/FAEtov.jpg'
        }
    ]
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row">
                    {
                        fakePricePlan.map(pricePlan => <PricingCategoryDetails pricePlan={pricePlan} key={pricePlan.id}></PricingCategoryDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingCategory;