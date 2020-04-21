import React from 'react';
import { useHistory } from 'react-router-dom';

import WizardButtonActionsType from '../../types/WizardButtonActions';
import useStyles from './styles';

interface Props {
  link: string;
  actionType: WizardButtonActionsType;
}

const WizardNavButton: React.FC<Props> = ({ link, actionType }: Props) => {
  const classes = useStyles();
  const history = useHistory();

  const buttonTypeToClass = (): string => {
    if (actionType === 'Back') return classes.backButton;
    if (actionType === 'Forward') return classes.forwardButton;
    return classes.finishButton;
  };

  const handleClick = (): void => history.push(link);

  if (actionType === 'Finish')
    return (
      <button type="submit" className={buttonTypeToClass()}>
        <span>{actionType}</span>
      </button>
    );

  return (
    <button type="button" className={buttonTypeToClass()} onClick={handleClick}>
      <span>{actionType}</span>
    </button>
  );
};

export default WizardNavButton;
