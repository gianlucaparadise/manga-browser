import React from 'react';
import styled from 'styled-components';
import SearchBar from "./search-bar/SearchBar";
import CharactersShowcase from "./characters-showcase/CharactersShowcase";

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
  return (
    <AppContainer>
      <AppHeader>
        <SearchBar />
        <MangaCharacters />
      </AppHeader>
    </AppContainer>
  );
}

export default App;
