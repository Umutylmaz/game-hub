import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/NavBar';

const App = () => {
  return (
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
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;
