import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Journal } from "./pages/Journal";

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/journal">
                    <Journal />
                </Route>
            </Switch>
        </Router>
    );
}

export default App
