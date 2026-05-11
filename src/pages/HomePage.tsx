import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import GenreList from '../components/GenreList';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import GameGrid from '../components/GameGrid';

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem
          area="aside"
          display={{ base: 'none', lg: 'block' }}
          paddingX={5}
          overflow="hidden"
        >
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack gap={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
