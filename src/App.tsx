import React from 'react';
import { ThemeProvider } from 'react-jss';

import * as theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" />
    </ThemeProvider>
  );
};

export default App;
