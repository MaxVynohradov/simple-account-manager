/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo, useState } from 'react';
import { useTheme } from 'react-jss';

import { IInput } from '../../../interfaces/IInput';
import useStyles from '../styles';

const GenderRadioButtonsGroup: React.FC<IInput & FieldProps> = ({
  label,
  field,
  required,
  name,
  form: { touched, errors },
}: IInput & FieldProps) => {
  const [checkedGender, setCheckedGender] = useState<'Male' | 'Female'>('Male');

  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError, checkedGender });
  return (
    <div className={classes.simpleInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        <span>{label}</span>
        <span className="requiredSignSpan">{required ? '*' : ''}</span>
      </label>
      <div className={classes.radioButtonGroupInputBlock}>
        <label
          htmlFor="gender_male_btn"
          className={classes.radioButtonInputLabel}
          style={{
            ...(checkedGender === 'Male'
              ? { color: 'black', fontWeight: 500 }
              : {}),
          }}
        >
          <input
            type="radio"
            id="gender_male_btn"
            name="gender"
            value="Male"
            className={classes.radioButtonInput}
            checked={checkedGender === 'Male'}
            onClick={(): void => {
              setCheckedGender('Male');
            }}
            {...field}
          />
          Male
        </label>
        <label
          htmlFor="gender_female_btn"
          className={classes.radioButtonInputLabel}
          style={{
            ...(checkedGender === 'Female'
              ? { color: 'black', fontWeight: 500 }
              : {}),
          }}
        >
          <input
            type="radio"
            id="gender_female_btn"
            name="gender"
            value="Female"
            className={classes.radioButtonInput}
            checked={checkedGender === 'Female'}
            onClick={(): void => {
              setCheckedGender('Female');
            }}
            {...field}
          />
          Female
        </label>
      </div>
      <p className={classes.simpleInputFieldErrorMessage}>
        <ErrorMessage name={field.name}>{(msg): string => msg}</ErrorMessage>
      </p>
    </div>
  );
};

export default memo(GenderRadioButtonsGroup);
