import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import history from '../../utils/history'
import Home from './Home'
import DashboardLayout from './Layout'

export default function DashboardRoute() {
    return (
        <DashboardLayout>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </DashboardLayout>
    )
}
