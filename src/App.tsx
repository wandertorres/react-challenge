import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { JournalList } from "./pages/Journal/List";
import { JournalCreate } from "./pages/Journal/Create";

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
                    <JournalList />
                </Route>
                <Route path="/journal/create">
                    <JournalCreate />
                </Route>
            </Switch>
        </Router>
    );
}

export default App
