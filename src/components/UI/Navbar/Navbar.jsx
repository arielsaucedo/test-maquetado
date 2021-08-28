import React, { useState } from 'react';
import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import Logo from './Logo';
import { MenuIcons } from './MenuIcons';
import { MenuToggle } from './MenuToggle';
import { MenuLinks } from './MenuLinks';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box backgroundColor="#100217E6">
      <Flex alignItems="center" justifyContent={{ base: 'space-between' }} paddingY={3}>
        <Box>
          <MenuToggle isOpen={isOpen} toggle={toggle} />
        </Box>

        <Logo />

        <MenuIcons />
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <MenuLinks />
        </Box>
      </Flex>
    </Box>
  );
};
