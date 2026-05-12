import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        // prevent the form to post
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
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
