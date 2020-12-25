import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreatePalette from '../Components/Pages/CreatePalette';
import Home from '../Components/Pages/Home';
import PalettePage from '../Components/Pages/PalettePage';
import SinglePalettePage from '../Components/Pages/SinglePalettePage';

function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route exact path = "/palette/createPalette" render={(props)=><CreatePalette {...props} />} />
            <Route exact path = "/palette/:id">
                <PalettePage />
            </Route>
            <Route exact path = "/palette/:paletteId/:colorId">
                <SinglePalettePage />
            </Route>
        </Switch>
    );
}

export default Routes;