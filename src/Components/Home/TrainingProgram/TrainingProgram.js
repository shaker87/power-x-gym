import React from 'react';
import './TrainingProgram.css'
import training1 from '../../../Image/training1.png';
import training2 from '../../../Image/training2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TrainingProgram = () => {
    return (
        <section className="training-program">
            <div className="container">
                <div className="section-title text-center pb-5">
                    <h1 style={{color: '#171426'}}>TRAINING <span style={{color: '#FCD842'}}>PROGRAM</span></h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="training-box">
                            <img className="img-fluid" style={{height: '380px', width: '100%'}} src={training1} alt="" srcset="" />
                            <div className="train-content d-flex align-items-center">
                                <h4>YOGA TRAINING SESSION</h4>
                                <FontAwesomeIcon className="ml-4" icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="training-box">
                            <img className="img-fluid" style={{height: '380px', width: '100%'}} src={training2} alt="" srcset="" />
                            <div className="train-content d-flex align-items-center">
                                <h4>CARDIO TRAINING SESSION</h4>
                                <FontAwesomeIcon className="ml-4" icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingProgram;