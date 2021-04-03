import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MangaDetail } from "../../models/MangaDetail";
import { RootState } from "../";

interface MangaDetailsMap {
    [key: string]: MangaDetail
}

interface MangaDetailState {
    value: MangaDetailsMap
}

const initialState: MangaDetailState = {
    value: {}
}

export const mangaDetailSlice = createSlice({
    name: "mangaDetail",
    initialState,
    reducers: {
        upsertMangaDetail: (state, action: PayloadAction<MangaDetail>) => {
            const newDetail = action.payload
            state.value[newDetail.mal_id!] = newDetail
        }
    }
})

export const { upsertMangaDetail } = mangaDetailSlice.actions
export const selectMangaDetail = (state: RootState) => state.mangaDetail.value
export default mangaDetailSlice.reducer