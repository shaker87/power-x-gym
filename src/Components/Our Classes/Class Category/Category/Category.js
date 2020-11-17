import React from 'react';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const { name, url, id} = props.category;
    return (
            <div className='category-card'>
               <Link to={'/course/'+id}><img src={url} alt=""  className='img-fluid category-img-style'/></Link> 
                <h4 className='category-name-style'>{name}
                <FontAwesomeIcon className="ml-4" icon={faArrowRight} />
                </h4>
         
            </div>
    );
};

export default Category;