import { Field as FormikField } from 'formik';
import React from 'react';

import PasswordInputField from '../../components/CustomInputs/PasswordInput';
import PhotoInputField from '../../components/CustomInputs/PhotoInput';
import SimpleInputField from '../../components/CustomInputs/TextInput';
import useStyles from './styles';

const UserAccountWizardTab: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.columnContainer}>
        <FormikField
          type="file"
          name="avatar"
          label="add avatar"
          component={PhotoInputField}
        />
      </div>
      <div className={classes.columnContainer}>
        <FormikField
          type="text"
          name="userName"
          label="User name"
          component={SimpleInputField}
        />
        <FormikField
          type="password"
          name="password"
          label="Password"
          component={PasswordInputField}
        />
        <FormikField
          type="password"
          name="passwordRepeat"
          label="Repeat Password"
          component={PasswordInputField}
        />
      </div>
    </>
  );
};

export default UserAccountWizardTab;
