import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../../../theme/interfaces';

const useStyles = createUseStyles((theme: IGeneralTheme) => ({
  forwardButton: {
    ...theme.generalButtonStyles,
    backgroundColor: theme.background.color.primary,
    color: theme.font.color.white,
  },
  backButton: {
    ...theme.generalButtonStyles,
    backgroundColor: '#C1CFE0',
    color: theme.font.color.white,
  },
  finishButton: {
    ...theme.generalButtonStyles,
    backgroundColor: '#4EE4A5',
    color: theme.font.color.white,
  },
}));

export default useStyles;
