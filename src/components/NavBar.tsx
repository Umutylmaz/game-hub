import { Button, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { useColorMode } from './ui/color-mode';
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Button onClick={toggleColorMode}>
        {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
    </HStack>
  );
};

export default Navbar;
