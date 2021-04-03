import { getMangaDetail } from "../../backend"
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { MangaDetail as MangaDetailModel } from "../../models/MangaDetail";
import AuthorAvatar from "../author-avatar/AuthorAvatar"
import { Chip, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../styling";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

const Title = styled(Typography)`
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;
    }
`

interface CoverProps {
    src: string | undefined
};

const Cover = styled(Paper)`
    min-width: 40vw;
    height: 60vw;
    margin: 10px;
    background-image: url(${(props: CoverProps) => props.src});
    background-size: cover;
    background-position: center;

    @media ${device.mobile} {
        width: 80vw;
        height: 130vw;
    }
`

const DetailContainer = styled.div`
`

const SynopsisBox = styled(Paper)`
    padding: 50px 30px;
    box-sizing: border-box;
    text-align: start;
`

const AuthorsContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const AuthorChip = styled(Chip)`
    margin: 5px;
`

interface UrlParams {
    /**
     * Manga id in the query parameters
     */
    id: string
}

const MangaDetail = () => {
    const { id }: UrlParams = useParams()
    const [mangaDetail, setMangaDetail] = useState<MangaDetailModel>({})

    useEffect(() => {
        const getMangaDetailAndUpdate = async () => {
            const manga = await getMangaDetail(id)
            setMangaDetail(manga)
        }

        getMangaDetailAndUpdate()
    }, [id, setMangaDetail])

    return (
        <MainContainer>
            <Title variant="h3">
                {mangaDetail.title}
            </Title>
            <BodyContainer>
                <Cover elevation={3} src={mangaDetail.image_url} />
                <DetailContainer>
                    <AuthorsContainer>
                        {mangaDetail.authors?.map(a => (
                            <AuthorChip avatar={<AuthorAvatar author={a} />} label={a.name} key={a.mal_id} />
                        ))}
                    </AuthorsContainer>
                    <SynopsisBox>
                        <Typography variant="body1">
                            {mangaDetail.synopsis}
                        </Typography>
                    </SynopsisBox>
                </DetailContainer>
            </BodyContainer>
        </MainContainer>
    )
}

export default MangaDetail