import { FunctionComponent } from "react";
import styled from "styled-components";
import { SearchResult } from '../../models/SearchResponse';
import MangaItem from "../manga-item/MangaItem";
import { device } from "../styling"

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;

    @media ${device.mobile} {
        flex-direction: column;
    }
`

interface Props {
    itemList: SearchResult[];
    onItemSelected?: (item: SearchResult) => void
}

const MangaItemList: FunctionComponent<Props> = (props) => {

    const onItemClicked = (item: SearchResult) => {
        if (props.onItemSelected) {
            props.onItemSelected(item)
        }
    }

    const itemListView = props.itemList.map((item) => {
        return (<MangaItem manga={item} key={item.mal_id} onClick={onItemClicked} />)
    })

    return (
        <ListContainer>
            {itemListView}
        </ListContainer>
    )
}

export default MangaItemList