import { createSlice, /*PayloadAction,*/ createAsyncThunk } from "@reduxjs/toolkit"
import { MangaDetail } from "../../models/MangaDetail";
import { RootState } from "../";
import { getMangaDetail as getMangaDetailApi } from "../../backend"

interface MangaDetailsMap {
    [key: string]: MangaDetail
}

interface MangaDetailState {
    value: MangaDetailsMap
}

const initialState: MangaDetailState = {
    value: {}
}

export const getMangaDetail = createAsyncThunk('manga/fetchMangaDetail', async (id: string) => {
    const mangaDetail = await getMangaDetailApi(id)
    return mangaDetail
})

export const mangaDetailSlice = createSlice({
    name: "mangaDetail",
    initialState,
    reducers: {
        // upsertMangaDetail: (state, action: PayloadAction<MangaDetail>) => {
        //     const newDetail = action.payload
        //     state.value[newDetail.mal_id!] = newDetail
        // }
    },
    extraReducers: builder => {
        builder.addCase(getMangaDetail.fulfilled, (state, action) => {
            const newDetail = action.payload
            state.value[newDetail.mal_id!] = newDetail
        })
    }
})

// export const { upsertMangaDetail } = mangaDetailSlice.actions
export const selectMangaDetail = (state: RootState) => state.mangaDetail.value
export default mangaDetailSlice.reducer