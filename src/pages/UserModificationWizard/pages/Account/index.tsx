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
      <p>UserAccountWizardTab</p>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserAccountWizardTab;
