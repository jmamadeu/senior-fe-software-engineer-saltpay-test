declare namespace Module {
  declare namespace Country {
    type Type = {
      cioc: string;
      name: string;
      capital: string;
      population: number;
      flag: string;
      region: string;

      borders: Array<string>;
      nativeName: string;
      subregion: string;
      topLevelDomain: Array<string>;
      currencies: Array<{
        code: string;
      }>;
      languages: Array<{
        name: string;
      }>;
    };
  }
}
