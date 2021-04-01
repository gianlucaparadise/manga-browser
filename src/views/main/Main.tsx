import React, { useEffect, useState } from 'react';
import SearchBar from "../search-bar/SearchBar";
import CharactersShowcase from "../characters-showcase/CharactersShowcase";
import MangaItemList from "../manga-item-list/MangaItemList";
import { search } from "../../backend"
import { SearchResult } from '../../models/SearchResponse';
import { Route, Switch, useLocation, useHistory } from "react-router-dom"

const Main = () => {
    const location = useLocation()
    const history = useHistory()
    const searchQuery = new URLSearchParams(location.search).get("q") || ""
    const [searchResults, setSearchResult] = useState<SearchResult[]>([])

    useEffect(() => {
        const performSearchAndUpdateResults = async () => {
            if (searchQuery && searchQuery.length > 3) {
                const mangaResults = await search(searchQuery)
                setSearchResult(mangaResults.results || [])
            }
            else if (!searchQuery || searchQuery.length === 0) {
                setSearchResult([])
            }
        }
        performSearchAndUpdateResults()
    }, [searchQuery, setSearchResult])

    const onSearchChanged = (query: string) => {
        if (query === "") {
            history.push("/")
        }
        else {
            const queryString = new URLSearchParams({ q: query }).toString()
            history.replace(`/search?${queryString}`)
        }
        setSearchQuery(query)
    }

    return (
        <>
            <SearchBar query={searchQuery} onChange={onSearchChanged} />
            <Switch>
                <Route exact path="/" >
                    <CharactersShowcase />
                </Route>
                <Route path="/search">
                    {/* <div>Search Results</div> */}
                    <MangaItemList itemList={searchResults} />
                </Route>
            </Switch>
        </>
    )
}

export default Main