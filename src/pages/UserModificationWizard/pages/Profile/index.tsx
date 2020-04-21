import React from 'react';

import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
// import useStyles from './styles';

const UserProfileWizardTab: React.FC<WizardTabProps> = ({ baseUrl }: WizardTabProps) => {
  // const classes = useStyles();
  const actionHandlers: IActionHandler[] = [
    { link: `${baseUrl}/account`, actionType: 'Back' },
    { link: `${baseUrl}/contacts`, actionType: 'Forward' },
  ];
  return (
    <>
      <p>UserProfileWizardTab</p>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserProfileWizardTab;
