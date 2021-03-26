import React from 'react';
import styled from 'styled-components';
import SearchBar from "./search-bar/SearchBar";
import CharactersShowcase from "./characters-showcase/CharactersShowcase";
import { Typography } from '@material-ui/core';

const AppContainer = styled.div`
  text-align: center;
`

const MangaCharacters = styled(CharactersShowcase)`
  /* margin: calc(10px + 5vmin); */
`

const AppHeader = styled.header`
  background-color: #DEC28A;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  const onSearchChanged = (query: string) => {
    console.log(query)
  }

  return (
    <AppContainer>
      <AppHeader>
        <SearchBar onChange={onSearchChanged} />
        <MangaCharacters />
        <Typography variant="overline">
          Manga Navigator for MAL
        </Typography>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
