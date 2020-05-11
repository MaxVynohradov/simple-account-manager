import IActionHandler from './interfaces/actionHandler';

export type PagesName = 'account' | 'profile' | 'contacts' | 'capabilities';

interface ILinksMap {
  account: IActionHandler[];
  profile: IActionHandler[];
  contacts: IActionHandler[];
  capabilities: IActionHandler[];
}

export const getTabsButtonsConfig = (baseUrl: string): ILinksMap => ({
  account: [{ link: `${baseUrl}/profile`, actionType: 'Forward' }],
  profile: [
    { link: `${baseUrl}/account`, actionType: 'Back' },
    { link: `${baseUrl}/contacts`, actionType: 'Forward' },
  ],
  contacts: [
    { link: `${baseUrl}/profile`, actionType: 'Back' },
    { link: `${baseUrl}/capabilities`, actionType: 'Forward' },
  ],
  capabilities: [
    { link: `${baseUrl}/contacts`, actionType: 'Back' },
    { link: `${baseUrl}/account`, actionType: 'Finish' },
  ],
});

export const pickTabButtonsConfig = (
  baseUrl: string,
  currentTabName: PagesName,
): IActionHandler[] => getTabsButtonsConfig(baseUrl)[currentTabName];
