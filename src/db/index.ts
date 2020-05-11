import { IDBPDatabase, openDB } from 'idb';

import { IWizardFormValues } from '../pages/UserModificationWizard/interfaces/wizardFormValues';
import RemakeDbSchema, { RemakeDbSchemaIndexes } from './RemakeDbSchema';

const DB_NAME = 'remake';
const DB_VERSION = 2;

let db: IDBPDatabase<RemakeDbSchema>;

export const connectDb = async (): Promise<IDBPDatabase<RemakeDbSchema>> => {
  if (db) return db;
  db = await openDB<RemakeDbSchema>(DB_NAME, DB_VERSION, {
    upgrade(database: IDBPDatabase<RemakeDbSchema>) {
      if (!database.objectStoreNames.contains('users')) {
        const usersStore = database.createObjectStore('users', {
          keyPath: 'email',
        });
        usersStore.createIndex('byEmail', 'email');
        usersStore.createIndex('byUserName', 'userName');
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

export const searchRemakeDbItemByIndex = async (
  indexName: RemakeDbSchemaIndexes,
  key: string,
): Promise<unknown> => {
  return db.getFromIndex('users', indexName, key);
};

export const setRemakeDbItem = async (
  key: string,
  val: IWizardFormValues,
): Promise<unknown> => {
  return db.put('users', val);
};
export const deleteRemakeDbItem = async (key: string): Promise<unknown> => {
  return db.delete('users', key);
};

export const getRemakeDbItemKeys = async (): Promise<unknown> => {
  return db.getAllKeys('users');
};
