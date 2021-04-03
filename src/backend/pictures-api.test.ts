import { getCharacterPictures, getAuthorPictures } from "./pictures-api"

test('get character pictures', async () => {
    const response = await getCharacterPictures(1)
    expect(response).not.toBeNull()

    const pictures = response.pictures
    expect(pictures).not.toBeNull()
    expect(pictures).not.toHaveLength(0)

    const firstPic = pictures[0]
    expect(firstPic).not.toBeNull()
    expect(firstPic.large).not.toBeNull()
    expect(firstPic.large).not.toHaveLength(0)
})

test('get author pictures', async () => {
    const response = await getAuthorPictures(1867)
    expect(response).not.toBeNull()

    const pictures = response.pictures
    expect(pictures).not.toBeNull()
    expect(pictures).not.toHaveLength(0)

    const firstPic = pictures[0]
    expect(firstPic).not.toBeNull()
    expect(firstPic.large).not.toBeNull()
    expect(firstPic.large).not.toHaveLength(0)
})