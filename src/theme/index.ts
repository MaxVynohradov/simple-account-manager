import IGeneralTheme from './interfaces';

const Theme: IGeneralTheme = {
  container: {
    general: {
      minWidth: '900px',
      width: '1200px',
    },
  },
  font: {
    color: {
      primary: '#000000',
      secondary: '#9BB0CB',
      regular: '#475666',
      error: '#EB5757',
      white: '#FFFFFF',
    },
  },
  background: {
    color: {
      paper: '#E5E5E5',
      primary: '#5E97F3',
      activeTabBody: '#E7F0FF',
    },
  },
};

export default Theme;
