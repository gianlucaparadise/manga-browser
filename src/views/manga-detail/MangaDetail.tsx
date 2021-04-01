import { SearchResult } from "../../models/SearchResponse";
import { useParams } from "react-router-dom"

interface Props {
    detail?: SearchResult
}

interface UrlParams {
    /**
     * Manga id in the query parameters
     */
    id: string
}

const MangaDetail = (props: Props) => {
    const { id }: UrlParams = useParams()

    return (
        <div>
            {props.detail ? props.detail.title : `Title ${id}`}
        </div>
    )
}

export default MangaDetail