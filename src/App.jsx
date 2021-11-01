import styles from './App.module.css';
import { NavigationBar } from './components/navigation/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';

export function App () 
{

    const title = "{fm}";

    return (
        <Router>

            <header>
                <h1 className={ styles.titleApp }> { title } </h1>
                <NavigationBar></NavigationBar>
            </header>
            <main>

                <Switch>

                    <Route path="/"> <LandingPage></LandingPage> </Route>

                </Switch>
                
            </main>

        </Router>
    );
}