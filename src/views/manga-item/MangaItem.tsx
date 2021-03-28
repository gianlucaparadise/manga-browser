import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SearchResult } from '../../models/SearchResponse';

interface Props {
    manga: SearchResult
}

const MangaItem: FunctionComponent<Props> = (props) => {

    return (
        <Card>
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
        </Card>
    )
}

export default MangaItem;