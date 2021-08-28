import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { CartIcon } from './Icons/HamburguerIcon';

export const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} onClick={toggle}>
      {isOpen ? (
        <Button colorScheme="transparent" float="right">
          <CloseIcon />
        </Button>
      ) : (
        <Button colorScheme="transparent" float="right">
          <CartIcon />
        </Button>
      )}
    </Box>
  );
};
