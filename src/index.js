import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home'; 
import MarkedLocation from './MarkedLocations'; 
import User from './User'; 
import Driver from "./Driver"; 
import Login from "./Login";
import './Driver'; 
import App from './App';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route path= '/MarkedLocation' component = {MarkedLocation}/>
            <Route path= '/User' component = {User}/>
            <Route path= '/Driver' component = {Driver}/>
            <Route path= '/Login' component = {Login}/>
        </div>
    </Router> 
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
