import React from 'react';
import './About.css';
import teamImg from '../../../Image/team.jpg';

const About = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" style={{ width: '100%', height: '550px'}} src={teamImg} alt="" srcset=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="content">
                            <h1 className="title">ABOUT US</h1>
                            <h1 style={{color: '#FCCB44'}}>WE ARE HERE TO DREAM!</h1>
                            <h2 style={{color: '#171426', fontSize:'40px'}}>OUR TEAM IS HERE SURVE YOU.</h2>
                            <p style={{color: '#171426'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facilis pariatur, aliquam odio assumenda iusto quam dolores atque
                                necessitatibus mollitia nihil quo nulla. Quidem,
                                in voluptatem. Quasi repudiandae nulla totam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;