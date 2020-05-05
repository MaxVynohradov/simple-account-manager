import { Field as FormikField } from 'formik';
import React from 'react';

import HobbiesCheckboxesInput from '../../components/CustomInputs/HobbiesCheckboxesInput';
import SkillsMultiSelectInput from '../../components/CustomInputs/SkillsMultiSelectInput';
import TextAreaInput from '../../components/CustomInputs/TextAreaInput';
import WizardNavBar from '../../components/WizardNavBar';
import IActionHandler from '../../interfaces/actionHandler';
import WizardTabProps from '../../interfaces/wizardTabProps';
import useStyles from './styles';

const UserCapabilitiesWizardTab: React.FC<WizardTabProps> = ({
  baseUrl,
}: WizardTabProps) => {
  const classes = useStyles();
  const actionHandlers: IActionHandler[] = [
    { link: `${baseUrl}/contacts`, actionType: 'Back' },
    { link: `${baseUrl}/account`, actionType: 'Finish' },
  ];

  return (
    <>
      <div className={classes.wizardBodyContainer}>
        <div className={classes.columnContainer}>
          <FormikField
            type="text"
            name="skills"
            label="Skills"
            component={SkillsMultiSelectInput}
          />
          <FormikField
            type="textarea"
            name="additionalInfo"
            label="Additional Information"
            component={TextAreaInput}
          />
        </div>
        <div className={classes.columnContainer}>
          <FormikField
            name="myHobbies"
            label="My Hobbies"
            component={HobbiesCheckboxesInput}
          />
        </div>
      </div>
      <WizardNavBar actionHandlers={actionHandlers} />
    </>
  );
};

export default UserCapabilitiesWizardTab;
