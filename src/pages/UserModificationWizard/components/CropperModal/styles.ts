import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cropContainer: {
    position: 'absolute',
    top: 100,
    left: 800,
    right: 100,
    bottom: 100,
    zIndex: 100,
    '& button': {
      position: 'absolute',
      zIndex: 120,
      top: 800,
      left: 100,
      right: 100,
      bottom: 100,
    },
    '& canvas': {
      position: 'absolute',
      zIndex: 130,
      top: 250,
      left: 400,
      right: 100,
      bottom: 100,
      visibility: 'hidden',
    },
  },
});

export default useStyles;
