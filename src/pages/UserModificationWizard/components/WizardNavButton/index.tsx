import { useFormikContext } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import WizardButtonActionsType from '../../types/WizardButtonActions';
import useStyles from './styles';

interface Props {
  link: string;
  actionType: WizardButtonActionsType;
  fields: string[];
}

const WizardNavButton: React.FC<Props> = ({
  link,
  actionType,
  fields,
}: Props) => {
  const { validateForm, values } = useFormikContext();
  const classes = useStyles();
  const history = useHistory();

  const buttonTypeToClass = (): string => {
    if (actionType === 'Back') return classes.backButton;
    if (actionType === 'Forward') return classes.forwardButton;
    if (actionType === 'Save') return classes.saveButton;
    return classes.finishButton;
  };

  const handleClick = (): void => {
    validateForm(values)
      .then((data) => {
        console.log('Validation errors', data);
        const tabEntries = Object.entries(data).filter((value) =>
          fields.includes(value[0]),
        );
        if (!tabEntries.length) return history.push(link);
        const targetErrors = Object.fromEntries(tabEntries);
        return toast.error(
          <div>
            {Object.values(targetErrors).map((row, idx) => (
              <p key={idx.toString()}>{row as string}</p>
            ))}
          </div>,
        );
      })
      .catch((error) => console.error(error));
  };

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
