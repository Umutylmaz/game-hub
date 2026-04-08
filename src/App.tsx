import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/NavBar';
import GameGrid from './components/GameGrid';

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
          <GridItem area="aside">Aside</GridItem>
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
