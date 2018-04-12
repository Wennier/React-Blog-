import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import Admin from './components/admin'
import NotFound from './components/notfound/NotFound.js'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/admin' component={Admin}/>
        <Route path='/404' component={NotFound}/>
        <Route path='/' component={App}>
            {/* <Route path='/:tagName' component={ArticleList} /> */}
        </Route>
    </Router>, 
    document.getElementById('root'));

