import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../../../theme/interfaces';

const generalButtonStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '40px',
  marginRight: '100px',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  cursor: 'pointer',
};

const useStyles = createUseStyles((theme: IGeneralTheme) => ({
  forwardButton: {
    ...generalButtonStyles,
    backgroundColor: theme.background.color.primary,
    color: theme.font.color.white,
  },
  backButton: {
    ...generalButtonStyles,
    backgroundColor: '#C1CFE0',
    color: theme.font.color.white,
  },
  finishButton: {
    ...generalButtonStyles,
    backgroundColor: '#4EE4A5',
    color: theme.font.color.white,
  },
}));

export default useStyles;
