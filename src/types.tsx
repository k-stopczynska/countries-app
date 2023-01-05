export type Country = {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  languages: string;
  currencies: string;
  borders: string;
  topLevelDomain: string;
  fifa: string;
};

export type HeaderProps = {
  onSearch: (arg0: string) => void;
  onChangeFilter: (arg0: string) => void;
};

export type HomeProps = {
  countries: Country[];
  isLoading: boolean;
  region: string;
  country: string;
  onChangeFilter: (arg0: string) => void;
  onSearch: (arg0: string) => void;
  onClick: (id: string) => void;
};

export type CountryCardProps = {
  countries: Country[];
  onClick: (e: string) => void;
  key: string;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  languages: string;
  currencies: string;
  borders: string;
  topLevelDomain: string;
};

export type InputSearchProps = {
  onSearch: (arg0: string) => void;
};

export type InputFilterProps = {
  onChangeFilter: (arg0: string) => void;
  region: string;
};

export type CountryItemProps = {
  countryCardHandler: (e: any) => void;
  flag: string;
  key: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type CountriesListProps = {
  filterRegion: string;
  searchedCountry: string;
  isLoading: boolean;
  countries: Country[];
  onClick: (arg0: string) => void;
};

export type ButtonType = {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  type?: "button" | "submit";
  className?: string;
};
