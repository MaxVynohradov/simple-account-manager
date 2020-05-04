export interface IMainLanguage {
  key?: string;
  value?: string;
}

export interface IWizardFormValues {
  // account
  avatar: File | FileList | null;
  userName: string;
  password: string;
  passwordRepeat: string;
  // profile
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  birthDate: string;
  gender: 'Male' | 'Female';
  // contacts
  company: string;
  githubLink: string;
  facebookLink: string;
  mainLanguage: IMainLanguage;
  fax: string;
  phoneNumbers: string[];
  // capabilities
  skills: string[];
  additionalInfo: string;
  myHobbies: string[];
}

export default IWizardFormValues;
