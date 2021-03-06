import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import history from '../../utils/history'
import AdminHome from './Home'
import AdminLayout from './Layout'

export default function AdminRoute() {


    return (
        <AdminLayout>
            <Router history={history}>
                <Switch>
                    <Route path="/"  component={AdminHome} />
                </Switch>
            </Router>
        </AdminLayout>
    )
}
