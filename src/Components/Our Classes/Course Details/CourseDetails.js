import React from 'react';
import { useParams } from 'react-router-dom';
import fakeService from '../../fakeService/fakeService';
import './CourseDetails.css';

const CourseDetails = () => {
    const {courseId} = useParams();
    const course = fakeService.find(service=> service.id === courseId);
    return (
        <div className="container">
            <div className='row course-details-style'>
            <div className='col-md-6 col-sm-12'>
                <img src={course.url} alt="" className='course-img-style'/>
                <p>{course.details}</p>
                <ul className='list-style'>
                    <li>{course.advantage1}</li>
                    <li>{course.advantage2}</li>
                    <li>{course.advantage3}</li>
                    <li>{course.advantage4}</li>
                    <li>{course.advantage5}</li>
                    <li>{course.advantage6}</li>
                </ul>

            </div>
            <div className='second-column col-md-6 col-sm-12'>
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
                    <button className='custom-button button-position'>Join Us</button>
            </div>
            
        </div>
        </div>
    );
};

export default CourseDetails;