import { Field as FormikField } from 'formik';
import React from 'react';

import FaxField from '../../components/CustomInputs/FaxInput';
import LangDropDownField from '../../components/CustomInputs/LangDropDownInput';
import PhoneNumberInputGroup from '../../components/CustomInputs/PhoneNumberInputGroup';
import SimpleInputField from '../../components/CustomInputs/TextInput';
import useStyles from './styles';

const UserContactsWizardTab: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.columnContainer}>
        <FormikField
          type="text"
          name="company"
          label="Company"
          component={SimpleInputField}
        />
        <FormikField
          type="text"
          required
          name="githubLink"
          label="Github link"
          component={SimpleInputField}
        />
        <FormikField
          type="text"
          required
          name="facebookLink"
          label="Facebook Link"
          component={SimpleInputField}
        />
        <FormikField
          type="text"
          name="mainLanguage"
          label="Main Language"
          component={LangDropDownField}
        />
      </div>
      <div className={classes.columnContainer}>
        <FormikField
          type="tel"
          required
          name="fax"
          label="Fax"
          component={FaxField}
        />
        <PhoneNumberInputGroup />
      </div>
    </>
  );
};

export default UserContactsWizardTab;
