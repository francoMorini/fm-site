import styles from './App.module.css';
import { NavigationBar } from './components/navigation/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Profile } from './pages/Profile';

export function App () 
{

    const title = "{fm}";

    return (
        <Router>

            <header>
                <NavigationBar></NavigationBar>
            </header>
            <Switch>
                <Route path="/"> <LandingPage></LandingPage> </Route>
                <Route exact path="/profile"> <Profile></Profile> </Route>
            </Switch>

        </Router>
    );
}