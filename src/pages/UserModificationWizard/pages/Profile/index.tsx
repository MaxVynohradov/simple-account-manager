import { Field as FormikField } from 'formik';
import React from 'react';

import AddressAutocompleteInput from '../../components/CustomInputs/AddressAutocompleteInput';
import DateField from '../../components/CustomInputs/DateInput';
import GenderRadioButtonsGroup from '../../components/CustomInputs/GenderRadioButtonsGroup';
import SimpleInputField from '../../components/CustomInputs/TextInput';
import useStyles from './styles';

const UserProfileWizardTab: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.columnContainer}>
        <FormikField
          type="text"
          required
          name="firstName"
          label="First name"
          component={SimpleInputField}
        />
        <FormikField
          type="text"
          required
          name="lastName"
          label="Last name"
          component={SimpleInputField}
        />
        <FormikField
          type="text"
          required
          name="birthDate"
          label="Birth date"
          component={DateField}
        />
      </div>
      <div className={classes.columnContainer}>
        <FormikField
          type="text"
          required
          name="email"
          label="Email"
          component={SimpleInputField}
        />
        <FormikField
          type="text"
          required
          name="address"
          label="Address"
          component={AddressAutocompleteInput}
        />
        <FormikField
          type="text"
          name="gender"
          label="Gender"
          component={GenderRadioButtonsGroup}
        />
      </div>
    </>
  );
};

export default UserProfileWizardTab;
