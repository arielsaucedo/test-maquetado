import React, { useState } from 'react';
import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import Logo from './Logo';
import { MenuIcons } from './MenuIcons';
import { MenuToggle } from './MenuToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Flex
      alignItems="center"
      backgroundColor="#100217E6"
      justifyContent="space-between"
      paddingY={3}
    >
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <Logo />
      <MenuIcons />
    </Flex>
  );
};
