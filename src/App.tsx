import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App(){
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </main>
    );
}

export default App