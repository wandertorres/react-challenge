import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { JournalList } from "./pages/Journal/List";
import { JournalCreate } from "./pages/Journal/Create";
import EntriesList from "./pages/Entries/List/List";
import EntriesCreate from "./pages/Entries/Create/Create";
import EntriesView from "./pages/Entries/View/View";

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
                <Route exact path="/journal/:id/posts">
                    <EntriesList />
                </Route>
                <Route path="/journal/:id/posts/create">
                    <EntriesCreate />
                </Route>
                <Route path="/journal/:id/posts/view/:entryId">
                    <EntriesView />
                </Route>
            </Switch>
        </Router>
    );
}

export default App
