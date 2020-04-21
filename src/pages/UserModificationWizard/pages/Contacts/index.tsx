import React from 'react';

import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
// import useStyles from './styles';

const UserContactsWizardTab: React.FC<WizardTabProps> = ({ baseUrl }: WizardTabProps) => {
  // const classes = useStyles();
  const actionHandlers: IActionHandler[] = [
    { link: `${baseUrl}/profile`, actionType: 'Back' },
    { link: `${baseUrl}/capabilities`, actionType: 'Forward' },
  ];
  return (
    <>
      <p>UserContactsWizardTab</p>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserContactsWizardTab;
