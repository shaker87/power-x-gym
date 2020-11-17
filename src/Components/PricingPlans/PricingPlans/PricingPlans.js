import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import PricingCategory from '../PricingCategory/PricingCategory';
import PricingHeader from '../PricingHeader/PricingHeader';




const PricingPlans = () => {
    return (
        <div>
               <PricingHeader></PricingHeader> 
               <PricingCategory></PricingCategory>
               <Footer></Footer>
        </div>
    );
};

export default PricingPlans;