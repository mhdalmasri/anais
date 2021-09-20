import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logging from 'node-logging-js';
import { HelmetProvider } from 'react-helmet-async';
import KeyboardFocus from './KeyboardFocus';
import { ROUTES } from './config';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/pages/home/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    logging.applyLogging(this, 'App');
    this.logDebug('init');
    KeyboardFocus.initialize();
  }

  render() {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <main className="b-page">
            <Switch>
              <Route exact path={ROUTES.home} component={Home} />
            </Switch>
          </main>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}
