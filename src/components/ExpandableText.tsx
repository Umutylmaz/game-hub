import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <>
      <Text>
        {summary}
        <Button
          backgroundColor={'yellow.200'}
          color={'black'}
          ml={2}
          variant="subtle"
          borderRadius={15}
          onClick={() => setExpanded(!expanded)}
          size="xs"
          fontWeight="bold"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
