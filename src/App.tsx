import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginGlobal from 'jss-plugin-global';
import jssPluginNested from 'jss-plugin-nested';
import React from 'react';
import injectSheet, { JssProvider, ThemeProvider } from 'react-jss';

import AppHeader from './components/AppHeader';
import style from './styles';
import theme from './theme';

jss.use(jssPluginGlobal(), jssPluginNested(), jssPluginCamelCase());

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
