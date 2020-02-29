import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import history from '../../utils/history'
import AdminHome from './Home'


export default function AdminRoute() {


    return (
        <Router history={history}>
            
            <Switch>
                <Route path="/"  component={AdminHome} />
            </Switch>
        </Router>
    )
}
