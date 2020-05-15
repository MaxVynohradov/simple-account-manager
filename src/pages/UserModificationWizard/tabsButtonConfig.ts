import IActionHandler from './interfaces/actionHandler';

export type PagesName = 'account' | 'profile' | 'contacts' | 'capabilities';

interface ILinksMap {
  account: IActionHandler[];
  profile: IActionHandler[];
  contacts: IActionHandler[];
  capabilities: IActionHandler[];
}

const PROFILE_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'address',
  'birthDate',
  'gender',
];

const CONTACTS_FIELDS = [
  'company',
  'githubLink',
  'facebookLink',
  'mainLanguage',
  'fax',
  'phoneNumbers',
];

const CAPABILITIES_FIELDS = ['skills', 'additionalInfo', 'myHobbies'];

export const getTabsButtonsConfig = (baseUrl: string): ILinksMap => ({
  account: [
    {
      link: `${baseUrl}/profile`,
      actionType: 'Forward',
      fields: ['userName', 'avatar', 'password', 'passwordRepeat'],
    },
  ],
  profile: [
    { link: `${baseUrl}/account`, actionType: 'Back', fields: PROFILE_FIELDS },
    {
      link: `${baseUrl}/contacts`,
      actionType: 'Forward',
      fields: PROFILE_FIELDS,
    },
  ],
  contacts: [
    { link: `${baseUrl}/profile`, actionType: 'Back', fields: CONTACTS_FIELDS },
    {
      link: `${baseUrl}/capabilities`,
      actionType: 'Forward',
      fields: CONTACTS_FIELDS,
    },
  ],
  capabilities: [
    {
      link: `${baseUrl}/contacts`,
      actionType: 'Back',
      fields: CAPABILITIES_FIELDS,
    },
    {
      link: `${baseUrl}/account`,
      actionType: 'Finish',
      fields: CAPABILITIES_FIELDS,
    },
  ],
});

export const pickTabButtonsConfig = (
  baseUrl: string,
  currentTabName: PagesName,
  isTabsClickable: boolean,
): IActionHandler[] => {
  const actions =
    getTabsButtonsConfig(baseUrl)[currentTabName] ||
    getTabsButtonsConfig(baseUrl).account;
  if (isTabsClickable)
    return [
      {
        link: `${baseUrl}/account`,
        actionType: 'Save',
        fields: actions[0].fields,
      },
    ];

  return actions;
};
