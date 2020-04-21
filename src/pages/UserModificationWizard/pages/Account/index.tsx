import { Field } from 'formik';
import React from 'react';

import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
import useStyles from './styles';

const UserAccountWizardTab: React.FC<WizardTabProps> = ({ baseUrl }: WizardTabProps) => {
  const classes = useStyles();
  const actionHandlers: IActionHandler[] = [{ link: `${baseUrl}/profile`, actionType: 'Forward' }];
  return (
    <>
      <div>
        <div>
          <Field type="email" name="userName" />
        </div>
        <div>
          <Field type="password" name="password" />
        </div>
        <div>
          <Field type="password" name="passwordRepeat" />
        </div>
      </div>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserAccountWizardTab;
