import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';
import GlobalStyle from 'theme/GlobalStyle';
import DetailsView from 'views/DetailsView';

const Root = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route exact path="/notes" component={NotesView} />
          <Route path="/notes/:id" component={DetailsView} />
          <Route exact path="/articles" component={ArticlesView} />
          <Route exact path="/twitters" component={TwittersView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </>
);

export default Root;
