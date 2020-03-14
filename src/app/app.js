import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import history from './utils/history'
import SignIn from './modules/Auth/Signin'
import SignUp from './modules/Auth/Signup'
import ForgotPassword from './modules/Auth/ForgotPassword'
import ResetPassword from './modules/Auth/ResetPassword'
import DashboardRoute from './modules/Dashboard/Route'
import AdminRoute from './modules/Admin/Route'

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={SignIn} />
                <Route path="/signin" exact={true} component={SignIn} />
                <Route path="/signup" exact={true} component={SignUp} />
                <Route path="/forgotpassword" exact={true} component={ForgotPassword} />
                <Route path="/resetPassword" exact={true} component={ResetPassword} />
                <Route path="/dashboard" name="Dashboard" render={props => <DashboardRoute {...props}/>} />
                <Route path="/admin" name="Admin" render={props => <AdminRoute {...props}/>} />

            </Switch>
        </Router>
    )
}
