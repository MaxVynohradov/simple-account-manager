import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginDefaultUnit from 'jss-plugin-default-unit';
import jssPluginGlobal from 'jss-plugin-global';
import jssPluginNested from 'jss-plugin-nested';
import React, { useEffect } from 'react';
import injectSheet, { JssProvider, ThemeProvider } from 'react-jss';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import { connectDb } from './db';
import UserModificationWizard from './pages/UserModificationWizard';
import UsersList from './pages/UsersList';
import style from './styles';
import theme from './theme';

jss.use(
  jssPluginGlobal(),
  jssPluginNested(),
  jssPluginCamelCase(),
  jssPluginDefaultUnit(),
);

const App: React.FC = () => {
  useEffect(() => {
    connectDb()
      // eslint-disable-next-line no-console
      .then((data) => console.log('DB connected', data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Router basename="/simple-account-manager">
          <div className="App">
            <AppHeader />
            <Switch>
              <Redirect from="/" to="/user/list" exact />
              <Route path="/user/create">
                <AppContainer headerText="Adding new user">
                  <UserModificationWizard isTabsClickable={false} />
                </AppContainer>
              </Route>
              <Route path="/user/edit">
                <AppContainer headerText="Edit">
                  <UserModificationWizard isTabsClickable />
                </AppContainer>
              </Route>
              <Route path="/user/list">
                <AppContainer headerText="List of users">
                  <UsersList />
                </AppContainer>
              </Route>
            </Switch>
            <ToastContainer />
          </div>
        </Router>
      </ThemeProvider>
    </JssProvider>
  );
};

export default injectSheet(style)(App);
