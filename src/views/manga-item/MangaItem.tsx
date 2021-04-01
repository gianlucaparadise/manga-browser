import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SearchResult } from '../../models/SearchResponse';
import styled from 'styled-components';
import { device } from "../styling";

const MangaCard = styled(Card)`
    margin: 10px;
    width: 20vw;
    
    @media ${device.mobile} {
        width: 80vw;
    }
`

interface Props {
    manga: SearchResult,
    onClick?: (manga: SearchResult) => void
}

const MangaItem: FunctionComponent<Props> = (props) => {

    const onClicked = () => {
        if (props.onClick) {
            props.onClick(props.manga)
        }
    }


    return (
        <MangaCard onClick={onClicked}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.manga.title}
                    image={props.manga.image_url}
                    title={props.manga.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.manga.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.manga.type} | Publishing: {props.manga.publishing ? "Yes" : "No"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MangaCard>
    )
}

export default MangaItem;