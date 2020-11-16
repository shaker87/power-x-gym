import React from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <div className="container">
            <div className='row course-details-style'>
            <div className='col-md-6 col-sm-12'>
                <img src="" alt="" className='course-img-style'/>
                <p>course description</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
            <div className='col-md-6 col-sm-12'>
                <h4><span style={{color: 'yellow', margingBottom: '5px'}}>CLASS</span> SCHEDULE</h4>
                    <div className="d-flex flex-wrap">
                    <div className='schedule-style'>
                    <h3>Sunday</h3>
                    <p style={{color: 'yellow'}}>8.00am-9.00am</p>
                    </div>
                    <div className='schedule-style'>
                    <h3>Monday</h3>
                    <p style={{color: 'yellow'}}>9.00am-10.00am</p>
                    </div>  
                    <div className='schedule-style'>
                    <h3>Tuesday</h3>
                    <p style={{color: 'yellow'}}>8.00am-9.00am</p>
                    </div>
                    <div className='schedule-style'>
                    <h3>Wednesday</h3>
                    <p style={{color: 'yellow'}}>8.00am-9.00am</p>
                    </div>
                    <div className='schedule-style'>
                    <h3>Thursday</h3>
                    <p style={{color: 'yellow'}}>10.00am-11.00am</p>
                    </div>
                    <div className='schedule-style'>
                    <h3>Friday</h3>
                    <p style={{color: 'yellow'}}>10.00am-11.00am</p>
                    </div>
                    </div>
                    <button className='custom-button'>Join Us</button>
            </div>
            
        </div>
        </div>
    );
};

export default CourseDetails;