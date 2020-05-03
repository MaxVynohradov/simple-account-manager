/* eslint-disable react/jsx-props-no-spreading */
// https://github.com/JedWatson/react-select/issues/3915

import { ErrorMessage, FieldProps } from 'formik';
import React, { memo } from 'react';
import { useTheme } from 'react-jss';
import Select from 'react-select';

import { IInput } from '../../../interfaces/IInput';
import useStyles from '../styles';
import SELECT_LIST from './data';

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
      <Select
        type={type}
        label="Language"
        options={SELECT_LIST}
        // styles={colourStyles}
        name={name}
        {...field}
        onChange={(value): void => {
          setFieldValue('mainLanguage', value);
        }}
        onBlur={(): void => {
          setFieldTouched('mainLanguage', true);
        }}
        // className={classes.simpleInputField}
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
