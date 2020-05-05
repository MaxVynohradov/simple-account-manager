export interface ISelectData {
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
  mainLanguage: ISelectData;
  fax: string;
  phoneNumbers: string[];
  // capabilities
  skills: ISelectData[];
  additionalInfo: string;
  myHobbies: Set<string>;
}

export default IWizardFormValues;
