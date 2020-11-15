import React from 'react';

import icons1 from '../../../Image/choose1.png';
import icons2 from '../../../Image/choose2.png';
import icons3 from '../../../Image/choose3.png';
import ChooseUsDetails from '../ChooseUsDetails/ChooseUsDetails';

const chooseData = [
    {
        title: 'FREE FITNESS TRAINING',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi. adipisicing elit. Dicta, excepturi.',
        icon: icons1
    },
    {
        title: 'TONS OF CARDIO & STREGNTH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi. adipisicing elit. Dicta, excepturi.',
        icon: icons2
    },
    {
        title: 'NO COMMMITMENT MEMBERSHIPS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi. adipisicing elit. Dicta, excepturi.',
        icon: icons3
    }
]

const ChooseUs = () => {
    return (
        <section className="choose-us" style={{paddingBottom: '100px'}}>
            <div className="container">
                <div className="section-title text-center pb-5">
                    <h1 style={{color: '#FCD842'}}>WHY <span style={{color: '#171426'}}>CHOOSE US</span></h1>
                </div>
                <div className="row">
                    {
                        chooseData.map(chooseData => <ChooseUsDetails chooseData={chooseData} key={chooseData.title}></ChooseUsDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;