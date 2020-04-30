import React from 'react';

import useStyles from './styles';

interface IAppContainerProps {
  headerText?: string;
  children?: React.ReactNode;
}

const AppContainer: React.FC<IAppContainerProps> = ({
  headerText,
  children,
}: IAppContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <p className={classes.appContainerHeader}>{headerText}</p>
      <div className={classes.appContainerContent}>{children}</div>
    </div>
  );
};

export default AppContainer;
