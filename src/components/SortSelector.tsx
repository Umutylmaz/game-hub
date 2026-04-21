import { Button, Menu } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content width="300px">
          <Menu.Item value="relevance">Relevance</Menu.Item>
          <Menu.Item value="date-added">Date added</Menu.Item>
          <Menu.Item value="name">Name</Menu.Item>
          <Menu.Item value="release-date">Release date</Menu.Item>
          <Menu.Item value="popularity">Popularity</Menu.Item>
          <Menu.Item value="average-rating">Average rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
