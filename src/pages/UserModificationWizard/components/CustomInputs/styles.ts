import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../../../theme/interfaces';

const errorColor = '#EB5757';

interface Props {
  theme: IGeneralTheme;
  isError: boolean;
}

const defaultLabelStyle = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14',
  lineHeight: '16px',
  color: '#657C9A',
};

const useStyles = createUseStyles({
  simpleInputBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '300px',
    margin: '24px auto 10px 100px',
  },
  dataPickerInputBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 200,
    margin: '24px auto 50px 100px',
  },
  radioButtonGroupInputBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    margin: '16px 0 0 0',
  },
  radioButtonInput: {
    marginRight: 10,
    cursor: 'pointer',
  },
  simpleInputLabel: {
    ...defaultLabelStyle,
    display: 'flex',
    justifyContent: 'space-between',
    '& .requiredSignSpan': {
      paddingRight: 5,
    },
  },
  radioButtonInputLabel: {
    ...defaultLabelStyle,
    display: 'flex',
    justifyContent: 'space-between',
    '& .requiredSignSpan': {
      paddingRight: 5,
    },
    cursor: 'pointer',
  },
  simpleInputField: {
    display: 'flex',
    width: 300,
    height: 40,
    background: (props: Props): string => props.theme.background.color.white,
    border: (props: Props): string =>
      `1px solid ${props.isError ? errorColor : '#C1CFE0'}`,
    boxSizing: 'border-box',
    margin: '5px 0 2px 0',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    paddingLeft: 10,
    '&:focus': {
      border: '1px solid #A1C4FF',
    },
  },
  birthDateDataPicker: {
    display: 'flex',
    width: 200,
    height: 40,
    background: (props: Props): string => props.theme.background.color.white,
    border: (props: Props): string =>
      `1px solid ${props.isError ? errorColor : '#C1CFE0'}`,
    boxSizing: 'border-box',
    margin: '5px 0 2px 0',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    paddingLeft: 10,
    '&:focus': {
      border: '1px solid #A1C4FF',
    },
  },
  simpleInputFieldErrorMessage: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: errorColor,
    paddingLeft: 10,
    height: 15,
  },
  passwordInputWrapper: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    top: 17,
    right: 14,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  dataPickerToggle: {
    position: 'absolute',
    top: 17,
    right: 14,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  imagePreview: {
    height: 170,
    width: 170,
    borderRadius: '50%',
    border: '3px solid #5E97F3',
    boxSizing: 'borderBox',
    margin: '25px 0 10px 0',
    objectFit: 'cover',
    justifySelf: 'center',
  },
  fileInputBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '24px auto 24px auto',
  },
  fileInput: {
    width: 0.1,
    height: 0.1,
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
    justifySelf: 'center',
  },
  fileInputLabel: {
    ...defaultLabelStyle,
    justifySelf: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    '& img': {
      height: 18,
      width: 18,
      objectFit: 'cover',
    },
  },
  dpWeek: {
    background: '#FAFCFF',
    borderColor: '#FAFCFF',
  },
  dpActiveDay: {
    background: '#FAFCFF',
    borderColor: '#FAFCFF',
    fontWeight: 500,
    fontSize: '14px',
    textAlign: 'right',
    color: '#475666',
    '& :hover': {
      background: '#FAFCEE',
    },
  },
  dpInActiveDay: {
    background: '#FFFFFF',
    color: '#FFFFFF',
  },
});

export default useStyles;
