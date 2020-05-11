import { IDBPDatabase, openDB } from 'idb';

import { IWizardFormValues } from '../pages/UserModificationWizard/interfaces/wizardFormValues';
import RemakeDbSchema from './RemakeDbSchema';

const DB_NAME = 'remake';
const DB_VERSION = 1;

let db: IDBPDatabase<RemakeDbSchema>;

export const connectDb = async (): Promise<IDBPDatabase<RemakeDbSchema>> => {
  if (db) return db;
  db = await openDB<RemakeDbSchema>(DB_NAME, DB_VERSION, {
    upgrade(database: IDBPDatabase<RemakeDbSchema>) {
      database.createObjectStore('users');
      if (!database.objectStoreNames.contains('users')) {
        const usersStore = database.createObjectStore('users', {
          keyPath: 'email',
        });
        usersStore.createIndex('byEmail', 'email');
        usersStore.createIndex('byFirstName', 'firstName');
        usersStore.createIndex('byLastName', 'lastName');
      }
    },
  });
  return db;
};

export const getRemakeDbItem = async (key: string): Promise<unknown> => {
  return db.get('users', key);
};

export const setRemakeDbItem = async (
  key: string,
  val: IWizardFormValues,
): Promise<unknown> => {
  return db.put('users', val, key);
};
export const deleteRemakeDbItem = async (key: string): Promise<unknown> => {
  return db.delete('users', key);
};

export const getRemakeDbItemKeys = async (): Promise<unknown> => {
  return db.getAllKeys('users');
};
