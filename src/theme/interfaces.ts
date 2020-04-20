interface IThemeProperties {
  [key: string]: string;
}

interface IThemeFonts {
  color: IThemeProperties;
}

interface IThemeContainers {
  general: IThemeProperties;
}

interface IThemeBackgrounds {
  color: IThemeProperties;
}

interface IGeneralTheme {
  container: IThemeContainers;
  font: IThemeFonts;
  background: IThemeBackgrounds;
}

export default IGeneralTheme;
