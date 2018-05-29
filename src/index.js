import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import Admin from './components/admin'
import NotFound from './components/notfound/NotFound.js'
import AdminFront from './components/admin/components/AdminFront';
import ArticleManager from './components/admin/components/ArticleManager';
import PubArticle from './components/admin/components/PubArticle';
import TagManager from './components/admin/components/TagsManager';
import UserManager from './components/admin/components/UserManager';
import ArticleList from './components/articleList/index';
import ArticleDetail from './components/toDetail/toDetail';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/admin' component={Admin}>
            <IndexRoute  component={AdminFront}/>
            <Route path='publishArticle' component={PubArticle}/>
            <Route path='usersManager' component={UserManager}/>
            <Route path='tagsManager' component={TagManager}/>
            <Route path='articleManager' component={ArticleManager}/>
        </Route>
        <Route path='/404' component={NotFound}/>
        <Route path='/' component={App}>
            <IndexRoute  component={ArticleList}/>
            <Route path='/:tagName' component={ArticleList} />
            <Route path='/toDetail/:id' component={ArticleDetail}/>
        </Route>
    </Router>, 
    document.getElementById('root'));

