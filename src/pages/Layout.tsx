import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
