import React from "react";
import { getAuthorPictures } from "../../backend"
import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { MALItem } from "../../models/MangaDetail";

interface Props {
    author: MALItem
}

const AuthorAvatar = (props: Props) => {
    const [avatarUrl, setAvatarUrl] = useState("")
    const id = props.author.mal_id
    const name = props.author.name

    useEffect(() => {
        const getAuthorAvatarAndUpdate = async () => {
            if (!id) return
            const authorPictures = await getAuthorPictures(id)
            if (!authorPictures.pictures || authorPictures.pictures.length <= 0) return

            const picture = authorPictures.pictures.find((p) => p.small)
            const pictureUrl = picture?.small
            if (!pictureUrl) return

            setAvatarUrl(pictureUrl)
        }
        getAuthorAvatarAndUpdate()
    }, [id, setAvatarUrl])

    return (
        <Avatar alt={name} src={avatarUrl} />
    )
}

export default AuthorAvatar