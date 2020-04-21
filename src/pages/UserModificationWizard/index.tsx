import { Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import { Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';

import IWizardFormValues from './interfaces/wizardFormValues';
import Account from './pages/Account';
import Capabilities from './pages/Capabilities';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import useStyles from './styles';
import wizardInitialValues from './wizardInitialValues';

const UserModificationWizard: React.FC<{}> = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const currentTabName = pathname.trimEnd().split('/').pop();

  const shouldTabBeActive = useCallback(
    (tabName: string): string | undefined => (currentTabName === tabName ? classes.wizardHeaderActiveItem : undefined),
    [currentTabName, classes.wizardHeaderActiveItem],
  );

  const onFormSubmit = useCallback((values: IWizardFormValues): void => {
    console.log('onFormSubmit', values);
  }, []);

  return (
    <div className={classes.wizardContainer}>
      <div className={classes.wizardHeader}>
        <div className={shouldTabBeActive('account')}>1. Account</div>
        <div className={shouldTabBeActive('profile')}>2. Profile</div>
        <div className={shouldTabBeActive('contacts')}>3. Contacts</div>
        <div className={shouldTabBeActive('capabilities')}>4. Capabilities</div>
      </div>
      <div className={classes.wizardBody}>
        <Formik initialValues={wizardInitialValues} onSubmit={onFormSubmit}>
          <Form>
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
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserModificationWizard;
