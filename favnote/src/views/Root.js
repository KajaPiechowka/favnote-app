import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NotesView}/>
        <Route path="/articles" component={ArticlesView}/>
        <Route path="/twitters" component={TwittersView}/>
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
