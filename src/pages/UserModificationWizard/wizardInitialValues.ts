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
  phoneNumbers: [''],
  // capabilities
  skills: [],
  additionalInfo: '',
  myHobbies: new Set<string>(),
};

export default wizardInitialValues;
