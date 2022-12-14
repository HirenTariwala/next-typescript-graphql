import { ICharacterDetail } from "../../../common/type"

export interface ICharactersPageSlice {
    charactersCount: number;
    allCharacters: ICharacterDetail[];
    currentPageNumber: number;
    last10VisitedProfiles: string[];
}