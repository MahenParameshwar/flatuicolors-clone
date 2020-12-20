import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import PalettePage from '../Components/Pages/PalettePage';

function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path = "/palette/:id">
                <PalettePage />
            </Route>
        </Switch>
    );
}

export default Routes;