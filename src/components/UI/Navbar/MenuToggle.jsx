import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { CartIcon } from './Icons/HamburguerIcon';

export const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} ml="1" onClick={toggle}>
      {isOpen ? (
        <Button colorScheme="transparent">
          <CloseIcon style={{ width: '27px', height: '24px', color: 'white' }} />
        </Button>
      ) : (
        <Button colorScheme="transparent">
          <CartIcon />
        </Button>
      )}
    </Box>
  );
};
