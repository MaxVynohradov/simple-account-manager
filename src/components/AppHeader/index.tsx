import React, { useCallback } from 'react';
import { useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';

import addUserIcon from '../../assets/icons/add users.svg';
import listUsersIcon from '../../assets/icons/list of users.svg';
import logo from '../../assets/Logo.png';
import useStyles from './styles';

const AppHeader: React.FC<{}> = () => {
  const history = useHistory();

  const theme = useTheme();
  const classes = useStyles({ theme });

  const onAddUserClick = useCallback((): void => history.push('/user/create'), [
    history,
  ]);

  const onUserListClick = useCallback((): void => history.push('/user/list'), [
    history,
  ]);

  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.menuButtonsBlock}>
          <div role="presentation" onClick={onAddUserClick}>
            <img src={addUserIcon} alt="add-user" />
            <span>Add new user</span>
          </div>
          <div role="presentation" onClick={onUserListClick}>
            <img src={listUsersIcon} alt="list-users" />
            <span>List of users</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
