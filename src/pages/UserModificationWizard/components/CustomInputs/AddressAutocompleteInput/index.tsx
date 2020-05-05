/* eslint-disable react/jsx-props-no-spreading, max-len */
// https://github.com/JedWatson/react-select/issues/3915

import { ErrorMessage, FieldProps } from 'formik';
import React, { memo } from 'react';
import { useTheme } from 'react-jss';
import AsyncSelect from 'react-select/async';

import { IInput } from '../../../interfaces/IInput';
import useStyles from '../styles';

const PLACES_URL = (input: string): string =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&autocomplete=true&country=ua`;

interface ISelectData {
  value: string;
  label: string;
}

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
      <AsyncSelect
        type={type}
        cacheOptions
        defaultOptions
        label="Addresses"
        loadOptions={async (inputValue, callback): Promise<void> => {
          try {
            const response = await fetch(PLACES_URL(inputValue), {
              method: 'GET',
            });
            const result = await response.text();
            const selectData = JSON.parse(result).features.map(
              // eslint-disable-next-line camelcase
              (item: { matching_text: string }): ISelectData => ({
                value: item.matching_text,
                label: item.matching_text,
              }),
            );
            callback(selectData);
          } catch (error) {
            callback([]);
          }
        }}
        required
        name={name}
        {...field}
        value={field.value}
        onChange={(value): void => {
          setFieldValue(field.name, value);
        }}
        onBlur={(): void => {
          setFieldTouched(field.name, true);
        }}
        className={classes.select}
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
