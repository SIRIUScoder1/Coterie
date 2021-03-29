import {Route, BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import SignIn from "./components/coterie/SignIn";
import SignUp from "./components/coterie/SignUp";

const routing = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'))