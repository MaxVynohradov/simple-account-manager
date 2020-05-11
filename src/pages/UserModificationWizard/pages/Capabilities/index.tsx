import { Field as FormikField } from 'formik';
import React from 'react';

import HobbiesCheckboxesInput from '../../components/CustomInputs/HobbiesCheckboxesInput';
import SkillsMultiSelectInput from '../../components/CustomInputs/SkillsMultiSelectInput';
import TextAreaInput from '../../components/CustomInputs/TextAreaInput';
import useStyles from './styles';

const UserCapabilitiesWizardTab: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default UserCapabilitiesWizardTab;
