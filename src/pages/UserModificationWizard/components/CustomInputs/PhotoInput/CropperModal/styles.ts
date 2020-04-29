import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../../../../../theme/interfaces';

const useStyles = createUseStyles((theme: IGeneralTheme) => ({
  cropContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backGround: '1px solid black',
    '& .button-container': {
      position: 'absolute',
      zIndex: 120,
      bottom: 20,
      left: '50%',
      '& button': {
        position: 'relative',
        ...theme.generalButtonStyles,
        left: -theme.generalButtonStyles.width / 2,
      },
    },
    '& canvas': {
      position: 'absolute',
      zIndex: 200,
      top: 50,
      left: 50,
      display: 'none',
    },
  },
}));

export default useStyles;
