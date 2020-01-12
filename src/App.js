import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import Home from "./containers/pages/Home";
import Login from "./containers/pages/Login";
import About from "./containers/pages/About";

const App = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
    );
};

export default App

