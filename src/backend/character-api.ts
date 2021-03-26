import { CharacterPicturesResponse } from "../models/CharacterPicturesResponse";
import { JIKAN_V3_BASEURL } from "./config";
import { get } from "./rest-client";


export const getCharacterPictures = async (characterId: number) => {
    const url = `${JIKAN_V3_BASEURL}/character/${characterId}/pictures`
    console.debug(`Calling API: ${url}`)
    const response = await get<CharacterPicturesResponse>(url)
    return response
}