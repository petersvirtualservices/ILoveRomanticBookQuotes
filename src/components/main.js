import React from 'react';
import LandingPage from './landingpage'
import {Switch, Route} from 'react-router-dom';
import About from './about';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/landingpage" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main
