import WizardButtonActionsType from '../types/WizardButtonActions';

interface IActionHandler {
  link: string;
  actionType: WizardButtonActionsType;
  fields: string[];
}

export default IActionHandler;
