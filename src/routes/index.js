import React, { useLayoutEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { Home, Account, Browse, UnpaidCourse, MyCourse, PaidCourse, Webinar } from '../containers';
import {Login, Signup} from '../components';
 
function Routes() {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/account">
                <Account />
            </Route>
            <Route exact path="/browse">
                <Browse />
            </Route>
            <Route exact path="/unpaidcourse">
                <UnpaidCourse />
            </Route>
            <Route exact path="/mycourse">
                <MyCourse />
            </Route>
            <Route exact path="/paidcourse">
                <PaidCourse />
            </Route>
            <Route exact path="/webinar">
                <Webinar />
            </Route>
        </Switch>
    );
}

export default Routes;