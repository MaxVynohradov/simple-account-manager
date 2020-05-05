/* eslint-disable react/jsx-props-no-spreading */
// https://github.com/JedWatson/react-select/issues/3915

import { ErrorMessage, FieldProps } from 'formik';
import React, { memo } from 'react';
import { useTheme } from 'react-jss';

import { IInput } from '../../../interfaces/IInput';
import useStyles from '../styles';
import CHECKBOXES_LIST from './data';

const Field: React.FC<IInput & FieldProps> = ({
  form: { touched, errors, setFieldValue, setFieldTouched },
  label,
  field,
  required,
  name,
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
      <ul>
        {CHECKBOXES_LIST.map((item, idx) => (
          <li key={idx.toString()} className={classes.checkboxItem}>
            <label htmlFor={`hobbies_${idx}`}>
              <input
                type="checkbox"
                id={`hobbies_${idx}`}
                name={`hobbies_${idx}`}
                checked={field.value.has(item)}
                value={item}
                onChange={(event): void => {
                  if (event.target.checked) {
                    setFieldValue(
                      field.name,
                      field.value.add(event.target.value),
                    );
                  } else {
                    field.value.delete(event.target.value);
                    setFieldValue(field.name, field.value);
                  }
                  setFieldTouched(field.name, true);
                }}
              />
              <p>{item}</p>
            </label>
          </li>
        ))}
      </ul>
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
