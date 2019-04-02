import React from 'react'
import { Switch , BrowserRouter , Route } from 'react-router-dom'


// #Pages
import Login from '../pages/Login'
import Console from '../pages/Console'
import Test from '../pages/Test'


const RouterContainer = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path={'/dashboard_login'} component={Login} />
            <Route path={'/console'} component={Console} />
            <Route path={'/test'} component={Test} />
        </Switch>
    </BrowserRouter>

)

export {

    RouterContainer

}