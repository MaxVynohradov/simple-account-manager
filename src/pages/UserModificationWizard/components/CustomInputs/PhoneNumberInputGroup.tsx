/* eslint-disable react/jsx-props-no-spreading */
import {
  ErrorMessage,
  Field as FormikField,
  FieldProps,
  useField,
} from 'formik';
import React, { memo, useCallback, useState } from 'react';
import InputMask from 'react-input-mask';
import { useTheme } from 'react-jss';

import addButtonIcon from '../../../../assets/icons/add.svg';
import minusButtonIcon from '../../../../assets/icons/minus.svg';
import { IInput } from '../../interfaces/IInput';
import useStyles from './styles';

interface ICustomProps {
  phoneNumbersCount: number;
  handleRemovePhoneNumber: () => void;
}

const PhoneNumberInputItem: React.FC<IInput & FieldProps & ICustomProps> = ({
  form: { touched, errors, setFieldValue, setFieldTouched },
  phoneNumbersCount,
  label,
  field,
  name,
  handleRemovePhoneNumber,
}: IInput & FieldProps & ICustomProps) => {
  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });

  return (
    <div className={classes.phoneNumberInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        {label}
      </label>
      <div className={classes.passwordInputWrapper}>
        <InputMask
          {...field}
          mask="+7 (999) 999-99-99"
          placeholder="+7 (999) 999-99-99"
          type="text"
          name={name}
          disabled={false}
          value={field.value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setFieldValue(field.name, event.target.value);
          }}
          onBlur={(): void => {
            setFieldTouched(field.name, true);
          }}
          className={classes.simpleInputField}
        />
        {phoneNumbersCount > 1 ? (
          <img
            role="presentation"
            src={minusButtonIcon}
            alt="-"
            className={classes.removePhoneNumberIcon}
            onClick={handleRemovePhoneNumber}
          />
        ) : null}
      </div>
      <p className={classes.simpleInputFieldErrorMessage}>
        <ErrorMessage name={field.name}>{(msg): string => msg}</ErrorMessage>
      </p>
    </div>
  );
};

const PhoneNumberInputGroup: React.FC = () => {
  const [field, meta, helpers] = useField('phoneNumbers');
  const [phoneNumbersCount, setPhoneNumbersCount] = useState<number>(
    field.value.length,
  );
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleAddPhoneNumber = useCallback((): void => {
    setPhoneNumbersCount(phoneNumbersCount + 1);
  }, [phoneNumbersCount]);

  const handleRemovePhoneNumber = useCallback(
    (idx) => (): void => {
      helpers.setValue(
        field.value.filter((_: never, _idx: number) => idx !== _idx),
      );
      setPhoneNumbersCount(phoneNumbersCount - 1);
    },
    [field, meta, helpers],
  );

  return (
    <div className={classes.phoneNumberContainer}>
      {new Array(phoneNumbersCount).fill(0).map((_, idx) => (
        <FormikField
          key={idx.toString()}
          phoneNumbersCount={phoneNumbersCount}
          name={`phoneNumbers[${idx}]`}
          label={`Phone #${idx + 1}`}
          handleRemovePhoneNumber={handleRemovePhoneNumber(idx)}
          component={PhoneNumberInputItem}
        />
      ))}
      {phoneNumbersCount < 3 ? (
        <div
          role="presentation"
          className={classes.addPhoneNumberLabel}
          onClick={handleAddPhoneNumber}
        >
          <img
            src={addButtonIcon}
            alt="+"
            className={classes.addPhoneNumberIcon}
          />
          add phone number
        </div>
      ) : null}
    </div>
  );
};

export default memo(PhoneNumberInputGroup);
