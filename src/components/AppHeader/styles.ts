import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../theme/interfaces';

const useStyles = createUseStyles((theme: IGeneralTheme) => ({
  header: {
    background:
      'radial-gradient(50% 28800% at 50% 68.33%, #4E86E4 0%, #2F68C8 100%)',
    boxShadow: '0px 1px 5px #C1CEDE',
    height: '60px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.container.general.width,
    minWidth: theme.container.general.minWidth,
  },
  logoImg: {
    display: 'block',
    width: '100px',
    height: '16px',
  },
  menuButtonsBlock: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    '& div': {
      padding: '0 25px 0 25px',
      cursor: 'pointer',
      '& span': {
        color: theme.font.color.white,
        marginLeft: '7px',
      },
    },
  },
}));

export default useStyles;
