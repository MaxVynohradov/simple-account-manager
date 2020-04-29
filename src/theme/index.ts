import IGeneralTheme from './interfaces';

const Theme: IGeneralTheme = {
  container: {
    general: {
      minWidth: '970px',
      width: '970px',
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
      activeContainerBody: 'rgba(231,240,255,.2)',
      activeContainerHeader: '#4E86E4',
      inactiveContainerHeader: 'rgba(151,186,244, .2)',
    },
  },
  generalButtonStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    marginRight: 100,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '16px',
    cursor: 'pointer',
  },
};

export default Theme;
