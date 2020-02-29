import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import history from '../../utils/history'
import Home from './Home'

export default function DashboardRoute() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/"  component={Home} />
            </Switch>
        </Router>
    )
}
