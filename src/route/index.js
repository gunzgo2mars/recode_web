import React from 'react'
// # React-Router-Dom
import { Switch , BrowserRouter , Route } from 'react-router-dom'
// # Redux
import { connect } from 'react-redux'

// #Pages
import Login from '../pages/Login'
// # Console [Header Stack]
import Console from '../pages/Console'
// # Console [Section]
import Test from '../pages/Test'


const RouterContainer = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/console_login'} component={Login} />
                <Route path={'/console'} component={Console} />
            </Switch>
        </BrowserRouter>
    )

}

export {

    RouterContainer

}