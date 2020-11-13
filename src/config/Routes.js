import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Shop, Account, Profile, ProductDetails, NotFound } from '../views';
import { Layouts } from '../containers/Layouts'

const Routes = () => {
    return (
        <Router>
            <Layouts>
                {/* <DefaultHeader /> */}
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/account" component={Account}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/products/:productId" exact component={ProductDetails}></Route>


                    <Route path="*" exact component={NotFound}></Route>
                </Switch>
                {/* <DefaultFooter /> */}
            </Layouts>
        </Router>
    );
}

export default Routes;
