import React, { createContext, useState } from 'react';
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
import Login from './Components/Auth/Login/Login';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import MemberForm from './Components/MemberForm/MemberForm';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({isSigned:true});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/our-class">
            <OurClass></OurClass>
          </Route>
          <PrivateRoute path="/membership">
            <MemberForm></MemberForm>
          </PrivateRoute>
          <Route path='/class-details/:courseId'>
            <ClassDetails></ClassDetails>
          </Route>
          <Route path="/price-plan">
            <PricingPlans></PricingPlans>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
