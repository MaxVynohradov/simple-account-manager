import { Field as FormikField } from 'formik';
import React from 'react';

import SimpleInputField from '../../components/CustomInputs/TextInput';
import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
import useStyles from './styles';

const UserProfileWizardTab: React.FC<WizardTabProps> = ({
  baseUrl,
}: WizardTabProps) => {
  const classes = useStyles();
  const actionHandlers: IActionHandler[] = [
    { link: `${baseUrl}/account`, actionType: 'Back' },
    { link: `${baseUrl}/contacts`, actionType: 'Forward' },
  ];
  return (
    <>
      <div className={classes.wizardBodyContainer}>
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
            component={SimpleInputField}
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
            component={SimpleInputField}
          />
          <FormikField
            type="text"
            name="gender"
            label="Gender"
            component={SimpleInputField}
          />
        </div>
      </div>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserProfileWizardTab;
