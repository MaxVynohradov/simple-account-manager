import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginDefaultUnit from 'jss-plugin-default-unit'
import jssPluginGlobal from 'jss-plugin-global';
import jssPluginNested from 'jss-plugin-nested';
import React from 'react';
import injectSheet, { JssProvider, ThemeProvider } from 'react-jss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import UserModificationWizard from './pages/UserModificationWizard';
import style from './styles';
import theme from './theme';

jss.use(jssPluginGlobal(), jssPluginNested(), jssPluginCamelCase(), jssPluginDefaultUnit());

const App: React.FC = () => {
  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Router basename="/simple-account-manager">
          <div className="App">
            <AppHeader />
            <AppContainer headerText="Adding new user">
              <Switch>
                <Redirect from="/" to="/user/create" exact />
                <Route path="/user/create">
                  <UserModificationWizard />
                </Route>
              </Switch>
            </AppContainer>
          </div>
        </Router>
      </ThemeProvider>
    </JssProvider>
  );
};

export default injectSheet(style)(App);
