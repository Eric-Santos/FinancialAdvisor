import React, { Suspense, lazy } from "react";
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

const Home = lazy(() => import("./components/Home.js"));
const Navbar = lazy(() => import("./components/Navbar.js"));
const AboutUs = lazy(()=> import('./components/AboutUs.js'))
const Login = lazy(()=> import('./components/Login.js'))

function App() {
  return (
    <div className="background-color">
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/AboutUs' component={AboutUs}/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
