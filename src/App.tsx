import React, { useContext } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { JournalCreate, JournalRead }  from "./pages/Journal";
import { EntryCreate, EntryReadAll }  from "./pages/Entry";

function App(){
    const { isLogged } = useContext(UserContext);

    function LoggedRoute({ children, ...rest }: any) {
        return (
            <Route { ...rest } render={({ location }) => isLogged 
                ? children
                : <Redirect to={{ pathname:"/", state:{from: location} }} />} />
        );
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <LoggedRoute exact path="/journal">
                    <JournalRead />
                </LoggedRoute>
                <LoggedRoute path="/journal/create">
                    <JournalCreate />
                </LoggedRoute>
                <LoggedRoute path="/journal/:id/posts/create">
                    <EntryCreate />
                </LoggedRoute>
                <LoggedRoute exact path="/journal/:id/posts">
                    <EntryReadAll />
                </LoggedRoute>
            </Switch>
        </Router>
    );
}

export default App
