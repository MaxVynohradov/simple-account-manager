import jss from 'jss';
import jssPluginGlobal from 'jss-plugin-global';
import React from 'react';
import injectSheet, { JssProvider, ThemeProvider } from 'react-jss';

import AppHeader from './components/AppHeader';
import style from './styles';
import theme from './theme';

jss.use(jssPluginGlobal());

const App: React.FC = () => {
  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader />
        </div>
      </ThemeProvider>
    </JssProvider>
  );
};

export default injectSheet(style)(App);
