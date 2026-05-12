import { Heading, Spinner } from '@chakra-ui/react';
import useTrailer from '../hooks/useTrailer';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) return null;

  const trailer = data?.results[0];
  if (!trailer) return null;

  return (
    <>
      <Heading as="h2" size="lg" marginY={3}>
        Trailer
      </Heading>
      <video
        src={trailer.data[480]}
        poster={trailer.preview}
        controls
        style={{ width: '100%', borderRadius: '8px' }}
      />
    </>
  );
};

export default GameTrailer;
