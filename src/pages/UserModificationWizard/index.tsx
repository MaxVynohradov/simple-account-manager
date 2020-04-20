import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Account from './pages/Account';
import Capabilities from './pages/Capabilities';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import useStyles from './styles';

const UserModificationWizard: React.FC<{}> = () => {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <div className={classes.wizardContainer}>
      <div className={classes.wizardHeader}>
        <div className={classes.wizardHeaderActiveItem}>1. Account</div>
        <div>2. Profile</div>
        <div>3. Contacts</div>
        <div>4. Capabilities</div>
      </div>
      <div className={classes.wizardBody}>
        <Switch>
          <Redirect from={`${match.url}`} to={`${match.url}/account`} exact />
          <Route path={`${match.url}/account`} exact component={Account} />
          <Route path={`${match.url}/profile`} component={Profile} />
          <Route path={`${match.url}/contacts`} component={Contacts} />
          <Route path={`${match.url}/capabilities`} component={Capabilities} />
        </Switch>
      </div>
    </div>
  );
};

export default UserModificationWizard;
