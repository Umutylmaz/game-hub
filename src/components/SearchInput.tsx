import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        // prevent the form to post
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          ref={ref}
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
