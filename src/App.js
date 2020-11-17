import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import OurClass from './Components/Our Classes/Our Class/OurClass';
import ClassDetails from './Components/Our Classes/Class Details/ClassDetails';
import PricingPlans from './Components/PricingPlans/PricingPlans/PricingPlans';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/our-class">
            <OurClass></OurClass>
          </Route>
          {/* <Route path="/class-details">
            <ClassDetails></ClassDetails>
          </Route> */}
          <Route path='/class-details/:courseId'>
            <ClassDetails></ClassDetails>
          </Route>
          <Route path="/price-plan">
            <PricingPlans></PricingPlans>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
