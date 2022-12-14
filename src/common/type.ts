export interface ICharacterDetail {
  id: string;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: LocationInterface;
}

export interface LocationInterface {
    name: string;
}

export interface IProfileCardProps {
  character: ICharacterDetail;
  index: number;
}

export interface IGetStatusColor {
  Alive: string;
  Dead: string;
  unknown: string;
}

export interface IPaginationProps {
  total: number;
  currentPageNumber: number;
}

export interface ISearchComponentProps {
  size?: string; 
  allowClear?: boolean; 
  placeholder?: string;
  searchValue?: string;
  onSearch(value: string): void;
  onChange(event: any): void;
}
