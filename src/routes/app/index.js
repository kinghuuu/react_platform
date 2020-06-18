import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.less'
import Home from '../home'
import Login from '../login'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <Route path='/' component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                </Router>
            </div>
        );
    }
}

export default App;