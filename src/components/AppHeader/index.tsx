import React from 'react';
import { useTheme } from 'react-jss';

import addUserIcon from '../../assets/icons/add users.svg';
import listUsersIcon from '../../assets/icons/list of users.svg';
import logo from '../../assets/Logo.png';
import useStyles from './styles';

// interface AppHeaderProps {}

const AppHeader: React.FC<{}> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <div className={classes.menuButtonsBlock}>
          <div>
            <img src={addUserIcon} alt="add-user" />
            <span>Add new user</span>
          </div>
          <div>
            <img src={listUsersIcon} alt="list-users" />
            <span>List of users</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
