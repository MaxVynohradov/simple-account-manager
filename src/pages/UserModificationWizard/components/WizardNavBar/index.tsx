import React from 'react';

import IActionHandler from '../../interfaces/actionHandler';
import WizardNavButton from '../WizardNavButton';
import useStyles from './styles';

interface Props {
  actionHandlers: [IActionHandler];
}

const WizardNavBar: React.FC<Props> = ({ actionHandlers }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.navbarContainer}>
      {actionHandlers.map(({ link, actionType }) => (
        <WizardNavButton link={link} actionType={actionType} />
      ))}
    </div>
  );
};

export default WizardNavBar;
