import { Field as FormikField } from 'formik';
import React from 'react';

import FaxField from '../../components/CustomInputs/FaxInput';
import LangDropDownField from '../../components/CustomInputs/LangDropDownInput';
import SimpleInputField from '../../components/CustomInputs/TextInput';
import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
import useStyles from './styles';

const UserContactsWizardTab: React.FC<WizardTabProps> = ({
  baseUrl,
}: WizardTabProps) => {
  const classes = useStyles();
  const actionHandlers: IActionHandler[] = [
    { link: `${baseUrl}/profile`, actionType: 'Back' },
    { link: `${baseUrl}/capabilities`, actionType: 'Forward' },
  ];
  return (
    <>
      <div className={classes.wizardBodyContainer}>
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
          <FormikField
            type="text"
            name="phoneNumber1"
            label="Phone #1"
            component={SimpleInputField}
          />
          <FormikField
            type="text"
            name="phoneNumber2"
            label="Phone #2"
            component={SimpleInputField}
          />
          <FormikField
            type="text"
            name="phoneNumber3"
            label="Phone #3"
            component={SimpleInputField}
          />
        </div>
      </div>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserContactsWizardTab;
