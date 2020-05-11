import { Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import { CREATE_WIZARD_PERSIST_STORAGE } from '../../constants';
import { setRemakeDbItem } from '../../db';
import FormikPersist from './components/FormikPersist';
import IWizardFormValues from './interfaces/wizardFormValues';
import Account from './pages/Account';
import Capabilities from './pages/Capabilities';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import useStyles from './styles';
import WizardValidationSchema from './wizardFormValidation';
import wizardInitialValues from './wizardInitialValues';

interface Props {
  isTabsClickable: boolean;
}

const UserModificationWizard: React.FC<Props> = ({
  isTabsClickable = false,
}: Props) => {
  const history = useHistory();
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const currentTabName = pathname.trimEnd().split('/').pop();

  const shouldTabBeActive = useCallback(
    (tabName: string): string | undefined => {
      if (currentTabName === tabName) return classes.wizardHeaderActiveItem;
      return currentTabName !== tabName && isTabsClickable
        ? classes.wizardHeaderClickableItem
        : undefined;
    },
    [
      isTabsClickable,
      currentTabName,
      classes.wizardHeaderActiveItem,
      classes.wizardHeaderClickableItem,
    ],
  );

  const tabHeaderNavigationClick = useCallback(
    (link: string) => (): void => {
      if (isTabsClickable) history.push(link);
    },
    [isTabsClickable, history],
  );

  const onFormSubmit = useCallback((values: IWizardFormValues): void => {
    // eslint-disable-next-line no-console
    console.log('onFormSubmit', values);
    setRemakeDbItem(values.email, values)
      // eslint-disable-next-line no-console
      .then((data) => console.log('User data saved', data))
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error on user save', error));
  }, []);

  return (
    <div className={classes.wizardContainer}>
      <div className={classes.wizardHeader}>
        <div
          role="presentation"
          className={shouldTabBeActive('account')}
          onClick={tabHeaderNavigationClick('account')}
        >
          1. Account
        </div>
        <div
          role="presentation"
          className={shouldTabBeActive('profile')}
          onClick={tabHeaderNavigationClick('profile')}
        >
          2. Profile
        </div>
        <div
          role="presentation"
          className={shouldTabBeActive('contacts')}
          onClick={tabHeaderNavigationClick('contacts')}
        >
          3. Contacts
        </div>
        <div
          role="presentation"
          className={shouldTabBeActive('capabilities')}
          onClick={tabHeaderNavigationClick('capabilities')}
        >
          4. Capabilities
        </div>
      </div>
      <div className={classes.wizardBody}>
        <Formik
          initialValues={wizardInitialValues}
          onSubmit={onFormSubmit}
          validationSchema={WizardValidationSchema}
        >
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
            <FormikPersist name={CREATE_WIZARD_PERSIST_STORAGE} />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserModificationWizard;
