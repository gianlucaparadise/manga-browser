import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCharacterPictures } from "../../backend"

const FixedImg = styled.img`
  height: 40vmin;
  margin: calc(10px + 5vmin);
`

function getRandomCharacterId() {
    return Math.floor(Math.random() * 10000)
}

async function getRandomCharacterImage() {
    let imageUrl;
    while (!imageUrl) {
        try {
            const id = getRandomCharacterId()
            const picturesResponse = await getCharacterPictures(id)
            const picturesCount = picturesResponse.pictures.length
            const randomPictureIndex = Math.floor(Math.random() * picturesCount)
            imageUrl = picturesResponse.pictures[randomPictureIndex].large
        }
        catch (error) {
            console.error(error)
        }
    }
    return imageUrl
}

const CharactersShowcase = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(true)

    const togglePlaying = () => {
        console.log("Toggling play state")
        setIsPlaying(!isPlaying)
    }

    const getAndSetImage = async () => {
        const newImgUrl = await getRandomCharacterImage()
        setImgUrl(newImgUrl)
    }

    useEffect(() => {
        let cleanupFunction = () => { }

        if (imgUrl === "") {
            console.log("Getting initial image")
            getAndSetImage()
        }

        if (isPlaying) {
            console.log("Carousel started")
            const carousel = setTimeout(getAndSetImage, 3000)

            cleanupFunction = () => {
                console.log("Cancelling carousel")
                clearTimeout(carousel)
            }
        }

        return cleanupFunction
    }, [setImgUrl, isPlaying, imgUrl])

    return (
        <FixedImg onClick={togglePlaying} src={imgUrl} alt="Random Manga Character" />
    )
}

export default CharactersShowcase
