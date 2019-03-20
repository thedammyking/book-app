import React, { Component } from 'react'
import '../css/style.css'
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import Read from './Screens/Onboarding/Read'
import Review from './Screens/Onboarding/Review'
import Signup from './Screens/Signup'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Read} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        )
    }
}

export default App
