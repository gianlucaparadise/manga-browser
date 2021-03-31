import React from 'react';
import styled from 'styled-components';
import Main from "./main/Main";
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router } from "react-router-dom"

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

function App() {
  return (
    <AppContainer>
      <Router>
        <Main />
      </Router>
      <Typography variant="overline">
        Manga Navigator for MAL
      </Typography>
    </AppContainer>
  );
}

export default App;
