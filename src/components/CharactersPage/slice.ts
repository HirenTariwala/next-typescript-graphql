import { createSlice } from "@reduxjs/toolkit";
import { ICharactersPageSlice } from "./duck/type";

const initialState: ICharactersPageSlice = {
    charactersCount: 0,
    allCharacters: [],
    currentPageNumber: 1,
    last10VisitedProfiles: []
}

const charactersPageSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        saveLast10VisitedProfiles(state, action) {
            state.last10VisitedProfiles = action.payload
        },
        savePageCharacters(state, action) {
            state.charactersCount = +action.payload.count
            state.allCharacters = action.payload.characters
        },
        setCurrentPageNumber(state, action) {
            state.currentPageNumber = action.payload
        }
    }
});

export const { saveLast10VisitedProfiles, savePageCharacters, setCurrentPageNumber } = charactersPageSlice.actions;
export default charactersPageSlice.reducer;