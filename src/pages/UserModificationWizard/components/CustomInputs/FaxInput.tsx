/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo } from 'react';
import InputMask from 'react-input-mask';
import { useTheme } from 'react-jss';

import { IInput } from '../../interfaces/IInput';
import useStyles from './styles';

const Field: React.FC<IInput & FieldProps> = ({
  form: { touched, errors, setFieldValue, setFieldTouched },
  label,
  field,
  required,
  name,
  type,
}: IInput & FieldProps) => {
  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });
  return (
    <div className={classes.simpleInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        <span>{label}</span>
        <span className="requiredSignSpan">{required ? '*' : ''}</span>
      </label>
      <InputMask
        {...field}
        mask="+7 (999) 999-99-99"
        type={type}
        name={name}
        disabled={false}
        value={field.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          setFieldValue('fax', event.target.value);
        }}
        onBlur={(): void => {
          setFieldTouched('mainLanguage', true);
        }}
        className={classes.simpleInputField}
      />
      <p className={classes.simpleInputFieldErrorMessage}>
        <ErrorMessage name={field.name}>{(msg): string => msg}</ErrorMessage>
      </p>
    </div>
  );
};

Field.defaultProps = {
  required: false,
};

export default memo(Field);
