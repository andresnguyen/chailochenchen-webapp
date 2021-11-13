import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import About from '../pages/About'
import Payment from '../pages/Payment'
import NotFound from '../pages/NotFound'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products/:slug' component={Product}/>
            <Route path='/products' component={Catalog}/>
            <Route path='/payment' component={Payment}/>
            <Route path='/about' component={About}/>
            <Route path='/not-found' component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
    )
}

export default Routes
