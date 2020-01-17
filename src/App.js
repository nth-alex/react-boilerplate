import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";

const App = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
        </Switch>
    );
};

export default App

