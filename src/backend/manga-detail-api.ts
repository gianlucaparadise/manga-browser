import { MangaDetail } from "../models/MangaDetail";
import { JIKAN_V3_BASEURL } from "./config";
import { get } from "./rest-client";

export const getMangaDetail = async (id: string) => {
    const url = new URL(`${JIKAN_V3_BASEURL}/manga/${id}`)
    const requestUrl = url.toString()
    
    console.debug(`Calling API: ${requestUrl}`)
    const response = await get<MangaDetail>(requestUrl)
    return response
}