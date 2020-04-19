import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import BlogsListContainer from "containers/BlogsListContainer/BlogsListContainer";
import BlogDetailContainer from "containers/BlogDetailContainer/BlogDetailContainer";
import './App.scss';

const App = () => (
    <Router history={history}>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={BlogsListContainer}></Route>
            <Route path={process.env.PUBLIC_URL + "/blog-detail/:url"} component={BlogDetailContainer}></Route>
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    </Router>
);

export default App;
