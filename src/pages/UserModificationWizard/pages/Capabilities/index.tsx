import React from 'react';

import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
// import useStyles from './styles';

const UserCapabilitiesWizardTab: React.FC<WizardTabProps> = ({
  baseUrl,
}: WizardTabProps) => {
  // const classes = useStyles();
  const actionHandlers: IActionHandler[] = [
    { link: `${baseUrl}/contacts`, actionType: 'Back' },
    { link: `${baseUrl}/account`, actionType: 'Finish' },
  ];
  return (
    <>
      <p>UserCapabilitiesWizardTab</p>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserCapabilitiesWizardTab;
