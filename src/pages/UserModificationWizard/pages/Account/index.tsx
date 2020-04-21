import { Field as FormikField } from 'formik';
import React from 'react';

import PasswordInputField from '../../components/CustomInputs/PasswordInput';
import PhotoInputField from '../../components/CustomInputs/PhotoInput';
import SimpleInputField from '../../components/CustomInputs/TextInput';
import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
import useStyles from './styles';

const UserAccountWizardTab: React.FC<WizardTabProps> = ({ baseUrl }: WizardTabProps) => {
  const classes = useStyles();
  const actionHandlers: IActionHandler[] = [{ link: `${baseUrl}/profile`, actionType: 'Finish' }];
  return (
    <>
      <div className={classes.wizardBodyContainer}>
        <div className={classes.columnContainer}>
          <FormikField type="file" name="avatar" label="add avatar" component={PhotoInputField} />
        </div>
        <div className={classes.columnContainer}>
          <FormikField type="text" name="userName" label="User name" component={SimpleInputField} />
          <FormikField type="password" name="password" label="Password" component={PasswordInputField} />
          <FormikField type="password" name="passwordRepeat" label="Repeat Password" component={PasswordInputField} />
        </div>
      </div>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserAccountWizardTab;
