import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { JournalCreate, JournalRead }  from "./pages/Journal";
import { EntrieCreate, EntrieReadAll, EntrieReadOne }  from "./pages/Entrie";

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
                    <JournalRead />
                </Route>
                <Route path="/journal/create">
                    <JournalCreate />
                </Route>
                <Route path="/journal/:id/posts/create">
                    <EntrieCreate />
                </Route>
                <Route exact path="/journal/:id/posts">
                    <EntrieReadAll />
                </Route>
                <Route path="/journal/:id/posts/view/:entryId">
                    <EntrieReadOne />
                </Route>
            </Switch>
        </Router>
    );
}

export default App
