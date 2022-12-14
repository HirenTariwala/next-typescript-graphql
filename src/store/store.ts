import { configureStore } from "@reduxjs/toolkit";
import charactersPageSlice from "../components/CharactersPage/slice"

const store = configureStore({
    reducer: {
        charactersDetail: charactersPageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;