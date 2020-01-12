import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-auto"><NavLink to="/">Home</NavLink></div>
                    <div className="col-auto"><NavLink to="/about">About</NavLink></div>
                    <div className="col-auto"><NavLink to="/login">Login</NavLink></div>
                </div>
            </div>
        </header>
    );
};

export default Header
