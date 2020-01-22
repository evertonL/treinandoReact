import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from "./pages/product";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" componets={Main} />
            <Route path="/products/:id" componets={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;