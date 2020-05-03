import IWizardFormValues from './interfaces/wizardFormValues';

const wizardInitialValues: IWizardFormValues = {
  // account
  userName: '',
  avatar: null,
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
  mainLanguage: {},
  fax: '',
  phoneNumber1: '',
  phoneNumber2: '',
  phoneNumber3: '',
  // capabilities
  skills: ['', ''],
  additionalInfo: '',
  myHobbies: ['', ''],
};

export default wizardInitialValues;
