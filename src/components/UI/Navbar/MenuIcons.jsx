import React from 'react';
import { Box, Icon, Image, Stack } from '@chakra-ui/react';
import { SearchIcon } from './Icons/SearchIcon';
import { UserIcon } from './Icons/UserIcon';
import { CartIcon } from './Icons/CartIcon';

export const MenuIcons = () => {
  return (
    <Stack mr="4">
      <CartIcon />
    </Stack>
  );
};
