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


function App() {
  return (
    <>
      <Router>
        <Switch>

            <Home></Home>
          </Route>
          <Route path='/ourClasses'>
            <OurClass></OurClass>
          </Route>
          <Route path='/course/:courseId'>
          <ClassDetails></ClassDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
