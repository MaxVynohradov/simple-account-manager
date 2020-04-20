import React from 'react';
import { Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';

import Account from './pages/Account';
import Capabilities from './pages/Capabilities';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import useStyles from './styles';

const UserModificationWizard: React.FC<{}> = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const currentTabName = pathname.trimEnd().split('/').pop();

  const shouldTabBeActive = (tabName: string): string | undefined =>
    currentTabName === tabName ? classes.wizardHeaderActiveItem : undefined;

  return (
    <div className={classes.wizardContainer}>
      <div className={classes.wizardHeader}>
        <div className={shouldTabBeActive('account')}>1. Account</div>
        <div className={shouldTabBeActive('profile')}>2. Profile</div>
        <div className={shouldTabBeActive('contacts')}>3. Contacts</div>
        <div className={shouldTabBeActive('capabilities')}>4. Capabilities</div>
      </div>
      <div className={classes.wizardBody}>
        <Switch>
          <Redirect from={`${url}`} to={`${url}/account`} exact />
          <Route path={`${url}/account`} exact>
            <Account baseUrl={url} />
          </Route>
          <Route path={`${url}/profile`} exact>
            <Profile baseUrl={url} />
          </Route>
          <Route path={`${url}/contacts`} exact>
            <Contacts baseUrl={url} />
          </Route>
          <Route path={`${url}/capabilities`} exact>
            <Capabilities baseUrl={url} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserModificationWizard;
