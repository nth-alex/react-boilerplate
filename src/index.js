import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './reducers'
import 'bootstrap/scss/bootstrap.scss'
import './sass/style.sass'


ReactDOM.render(<Provider store={store}>
    <Router><App/></Router>
</Provider>, document.getElementById('root'));
