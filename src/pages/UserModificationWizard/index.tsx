import React from 'react';

import useStyles from './styles';

const UserModificationWizard: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.wizardContainer}>
      <div className={classes.wizardHeader}>
        <div className={classes.wizardHeaderActiveItem}>1. Account</div>
        <div>2. Profile</div>
        <div>3. Contacts</div>
        <div>4. Capabilities</div>
      </div>
      {/* <div>
        
      </div> */}
    </div>
  );
};

export default UserModificationWizard;
