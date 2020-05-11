import { DBSchema } from 'idb';

import { ISelectData } from '../pages/UserModificationWizard/interfaces/wizardFormValues';

export type RemakeDbSchemaIndexes =
  | 'byEmail'
  | 'byUserName'
  | 'byFirstName'
  | 'byLastName';

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
      byEmail: string;
      byUserName: string;
      byFirstName: string;
      byLastName: string;
    };
  };
}

export default RemakeDbSchema;
