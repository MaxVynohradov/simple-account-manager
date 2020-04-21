import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../theme/interfaces';

const useStyles = createUseStyles((theme: IGeneralTheme) => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.container.general.width,
    minWidth: theme.container.general.minWidth,
    margin: '30px auto 5px auto',
  },
  appContainerHeader: {
    margin: '25px 0 45px 0',
    color: theme.font.color.regular,
    fontSize: '35px',
    fontWeight: 'bold',
    lineHeight: '41px',
  },
  appContainerContent: {
    width: '100%',
  },
}));

export default useStyles;
