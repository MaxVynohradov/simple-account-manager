/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo, useCallback, useState } from 'react';
import { useTheme } from 'react-jss';

import eyeClosed from '../../../../assets/icons/icon visibility off.svg';
import eyeOpen from '../../../../assets/icons/icon visibility.svg';
import { IInput } from '../../interfaces/IInput';
import useStyles from './styles';

const PasswordField: React.FC<IInput & FieldProps> = ({
  label,
  field,
  name,
  form: { touched, errors },
}: IInput & FieldProps) => {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });

  const handlePasswordVisibility = useCallback((): void => {
    setPasswordShown(!isPasswordShown);
  }, [isPasswordShown]);

  return (
    <div className={classes.simpleInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        {label}
      </label>
      <div className={classes.passwordInputWrapper}>
        <input
          {...field}
          type={isPasswordShown ? 'text' : 'password'}
          name={name}
          className={classes.simpleInputField}
          {...field}
        />
        <img
          src={isPasswordShown ? eyeClosed : eyeOpen}
          alt="eye"
          className={classes.passwordToggle}
          role="presentation"
          onClick={handlePasswordVisibility}
        />
      </div>
      <p className={classes.simpleInputFieldErrorMessage}>
        <ErrorMessage name={field.name}>{(msg): string => msg}</ErrorMessage>
      </p>
    </div>
  );
};

export default memo(PasswordField);
