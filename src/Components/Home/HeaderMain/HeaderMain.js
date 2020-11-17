import React from 'react';
import './HeaderMain.css';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

const HeaderMain = () => {
    const history = useHistory();
    const joinBtn = () => {
        history.push("/our-class")
    }
    return (
        <div className="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-main-text mt-5">
                            <h1>THE BEST FITNESS<br/>STUDIO IN TOWN</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur. Doloribus reprehenderit, 
                            ex, cumque animi iste unde explicabo accusamus, veritatis sequi neque
                            doloremque officia dolorum? Et debitis excepturi quisquam atque at sed.</p>
                            <button onClick={joinBtn} className="custom-button">JOIN US</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="video-player">
                            <ReactPlayer width="450px" height="450px" url='https://www.youtube.com/embed/DZ2Gkzvndwk' />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HeaderMain;