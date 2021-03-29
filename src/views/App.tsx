import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from "./search-bar/SearchBar";
import CharactersShowcase from "./characters-showcase/CharactersShowcase";
import MangaItemList from "./manga-item-list/MangaItemList";
import { Typography } from '@material-ui/core';
import { search } from "../backend"
import { SearchResult } from '../models/SearchResponse';

const AppContainer = styled.div`
  text-align: center;
  background-color: #DEC28A;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledCharactersShowcase = styled(CharactersShowcase)`
  /* margin: calc(10px + 5vmin); */
`

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResult] = useState<SearchResult[]>([])

  const onSearchChanged = (query: string) => {
    console.log(query)
    setSearchQuery(query)
  }

  useEffect(() => {
    const performSearchAndUpdateResults = async () => {
      console.log(`Searching with query ${searchQuery}`)
      if (searchQuery && searchQuery.length > 3) {
        const mangaResults = await search(searchQuery)
        console.log(mangaResults.results)
        setSearchResult(mangaResults.results || [])
      }
      else if (!searchQuery || searchQuery.length === 0) {
        setSearchResult([])
      }
    }
    performSearchAndUpdateResults()
  }, [searchQuery])

  const hasResults = (searchResults && searchResults?.length > 0)

  return (
    <AppContainer>
      <SearchBar query={searchQuery} onChange={onSearchChanged} />
      { hasResults ? <MangaItemList itemList={searchResults} /> : <StyledCharactersShowcase />}
      <Typography variant="overline">
        Manga Navigator for MAL
      </Typography>
    </AppContainer>
  );
}

export default App;
