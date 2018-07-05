import React from 'react';
import {Route, Router, Switch} from 'react-router-dom'

import Musiclist from './components/list';
import Main from './components/main';
import Musicing from './components/musicing';

import history from 'history/createBrowserHistory'

export default class Routers extends React.Component{
    render() {
        return (
            <Router history={history()}>
                <Switch >
                    <Route path="/" exact component={Musicing}></Route>
                    <Route path="/list" component={Musiclist}></Route>
                    <Route path="/musicing" component={Musicing}></Route>
                </Switch>
            </Router>
        )
    }
}