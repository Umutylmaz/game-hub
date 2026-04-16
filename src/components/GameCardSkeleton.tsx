import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} width="300px" overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
