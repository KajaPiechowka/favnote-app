import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from "store";
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';
import GlobalStyle from 'theme/GlobalStyle';
import DetailsView from 'views/DetailsView';
import {routes} from 'routes'
import LoginView from './LoginView';

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={NotesView} />
          <Route path={routes.note} component={DetailsView} />
          <Route exact path={routes.articles} component={ArticlesView} />
          <Route path={routes.article} component={DetailsView} />
          <Route exact path={routes.twitters} component={TwittersView} />
          <Route path={routes.twitter} component={DetailsView} />
          <Route exact path={routes.login} component={LoginView}/>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
