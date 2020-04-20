import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  navbarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '170px',
  },
}));

export default useStyles;
