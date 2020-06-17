import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.less'
import Home from '../home'
import Login from '../login'
import TodoList from '../todoList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/todoList' component={TodoList}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;