import IWizardFormValues from "./interfaces/wizardFormValues";

const wizardInitialValues: IWizardFormValues = {
  // account
  userName: '',
  password: '',
  passwordRepeat: '',
  // profile
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  birthDate: '',
  gender: 'Male',
  // contacts
  company: '',
  githubLink: '',
  facebookLink: '',
  mainLanguage: '',
  fax: '',
  phones: ['', ''],
  // capabilities
  skills: ['', ''],
  additionalInfo: '',
  myHobbies: ['', ''],
};

export default wizardInitialValues;
