import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CartIcon } from './Icons/HamburguerIcon';

export const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <Box onClick={toggle}>
      {isOpen ? (
        <Button colorScheme="transparent" float="right">
          <p>Hola</p>
        </Button>
      ) : (
        <Button colorScheme="transparent" float="right">
          <CartIcon />
        </Button>
      )}
    </Box>
  );
};
