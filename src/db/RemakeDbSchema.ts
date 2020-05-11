import { DBSchema } from 'idb';

import { ISelectData } from '../pages/UserModificationWizard/interfaces/wizardFormValues';

interface RemakeDbSchema extends DBSchema {
  users: {
    value: {
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
    };
    key: string;
    indexes: {
      byEmail: number;
      byFirstName: number;
      byLastName: number;
    };
  };
}

export default RemakeDbSchema;
