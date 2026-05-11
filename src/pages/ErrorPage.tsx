import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/NavBar';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading fontSize={30} paddingBottom={2}>
          Oops...
        </Heading>
        <Text>
          {/* Checks if error is occured via invalid page */}
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'Unexpected error occured.'}
        </Text>
      </Box>
    </>
  );
};
export default ErrorPage;
