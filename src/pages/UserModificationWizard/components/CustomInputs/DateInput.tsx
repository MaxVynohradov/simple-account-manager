/* eslint-disable react/jsx-props-no-spreading */
// https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
import { enGB } from 'date-fns/esm/locale';
import dayjs from 'dayjs';
import { ErrorMessage, FieldProps } from 'formik';
import React, { memo, useCallback, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useTheme } from 'react-jss';

import calendarIcon from '../../../../assets/icons/calendar.svg';
import { IInput } from '../../interfaces/IInput';
import useStyles from './styles';

registerLocale('en-gb', enGB);

const initialSelectedDay = dayjs().subtract(19, 'year').toDate();

const DateField: React.FC<IInput & FieldProps> = ({
  label,
  field,
  required,
  name,
  form: { touched, errors, setFieldValue, setFieldTouched },
}: IInput & FieldProps) => {
  const [monthOnCalendar, setMonthOnCalendar] = useState<number>(
    dayjs(initialSelectedDay).month(),
  );
  const dpRef = useRef<DatePicker>(null);

  const theme = useTheme();
  const isError = Boolean(touched[field.name] && errors[field.name]);
  const classes = useStyles({ theme, isError });

  const handleChange = useCallback(
    (_value: Date): void => {
      setFieldValue(field.name, _value);
    },
    [field.name, setFieldValue],
  );

  const handleBlur = useCallback((): void => {
    setFieldTouched(name, true);
  }, [name, setFieldTouched]);

  return (
    <div className={classes.dataPickerInputBlock}>
      <label htmlFor={name} className={classes.simpleInputLabel}>
        <span>{label}</span>
        <span className="requiredSignSpan">{required ? '*' : ''}</span>
      </label>
      <div className={classes.passwordInputWrapper}>
        <DatePicker
          className={classes.birthDateDataPicker}
          placeholderText="DD/MM/YYYY"
          useWeekdaysShort
          locale="en-gb"
          disabledKeyboardNavigation
          selected={initialSelectedDay}
          onMonthChange={(date): void => {
            setMonthOnCalendar(dayjs(date).month());
          }}
          value={field.value ? dayjs(field.value).format('DD/MM/YYYY') : ''}
          showPopperArrow={false}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={dpRef}
          filterDate={(date): boolean => {
            return dayjs(date).month() === monthOnCalendar;
          }}
          dayClassName={(date): string | null => {
            return dayjs(date).month() === monthOnCalendar
              ? classes.dpActiveDay
              : classes.dpInActiveDay;
          }}
        />
        <img
          src={calendarIcon}
          alt="calendarIcon"
          className={classes.dataPickerToggle}
          role="presentation"
          onClick={(): void => dpRef?.current?.setOpen(true)}
        />
      </div>

      <p className={classes.simpleInputFieldErrorMessage}>
        <ErrorMessage name={field.name}>{(msg): string => msg}</ErrorMessage>
      </p>
    </div>
  );
};

DateField.defaultProps = {
  required: false,
};

export default memo(DateField);
