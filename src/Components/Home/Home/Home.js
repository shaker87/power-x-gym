import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Service from '../Service/Service';
import TrainingProgram from '../TrainingProgram/TrainingProgram';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <About></About>
            <TrainingProgram></TrainingProgram>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;