import { SearchResponse } from "../models/SearchResponse";
import { JIKAN_V3_BASEURL } from "./config";
import { get } from "./rest-client";

export const search = async (query: string) => {
    const url = new URL(`${JIKAN_V3_BASEURL}/search/manga`)
    url.searchParams.set('q', query)
    const requestUrl = url.toString()
    
    console.debug(`Calling API: ${requestUrl}`)
    const response = await get<SearchResponse>(requestUrl)
    return response
}