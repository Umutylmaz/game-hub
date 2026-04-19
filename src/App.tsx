import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // 1024px
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show when="@media (min-width: 1024px)">
          <GridItem area="aside">
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
      <div></div>
    </>
  );
};

export default App;
