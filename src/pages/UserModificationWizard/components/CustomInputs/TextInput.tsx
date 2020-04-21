/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import { IInput } from '../../interfaces/IInput';
import useStyles from './styles';

const Field: React.FC<IInput & FieldProps> = ({
  label,
  field,
  name,
  form: { touched, errors },
  type,
}: IInput & FieldProps) => {
  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });
  return (
    <div className={classes.simpleInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        {label}
      </label>
      <input {...field} type={type} name={name} className={classes.simpleInputField} value="" {...field} />
      <ErrorMessage name={field.name}>
        {(msg): React.ReactNode => <p className={classes.simpleInputFieldErrorMessage}>{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default memo(Field);
