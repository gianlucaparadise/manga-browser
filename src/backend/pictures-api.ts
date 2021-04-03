import { PicturesResponse } from "../models/PicturesResponse";
import { JIKAN_V3_BASEURL } from "./config";
import { get } from "./rest-client";


export const getCharacterPictures = async (characterId: number) => {
    const url = `${JIKAN_V3_BASEURL}/character/${characterId}/pictures`
    console.debug(`Calling API: ${url}`)
    const response = await get<PicturesResponse>(url)
    return response
}

export const getAuthorPictures = async (authorId: number) => {
    const url = `${JIKAN_V3_BASEURL}/person/${authorId}/pictures`
    console.debug(`Calling API: ${url}`)
    const response = await get<PicturesResponse>(url)
    return response
}