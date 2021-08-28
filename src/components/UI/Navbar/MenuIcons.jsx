import React from 'react';
import { Box, Icon, Image, Stack } from '@chakra-ui/react';
import { SearchIcon } from './Icons/SearchIcon';
import { UserIcon } from './Icons/UserIcon';
import { CartIcon } from './Icons/CartIcon';

export const MenuIcons = () => {
  return (
    <Stack direction="row" mr="6">
      <Box display={{ base: 'none', lg: 'inherit' }}>
        <SearchIcon display={{ base: 'none' }} />
      </Box>
      <Box display={{ base: 'none', lg: 'inherit' }}>
        <UserIcon />
      </Box>
      <Box display={{ base: 'block', lg: 'inherit' }}>
        <CartIcon />
      </Box>
    </Stack>
  );
};
