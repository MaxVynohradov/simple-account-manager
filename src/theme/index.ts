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
      activeContainerBody: '#E7F0FF',
      activeContainerHeader: '#4E86E4',
      inactiveContainerHeader: 'rgba(151,186,244, .2)',
    },
  },
};

export default Theme;
