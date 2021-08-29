import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/react';

export const MenuLinks = ({ isOpen }) => {
  const listLinks = ['SALE', 'E-SHOP', 'LOOKBOOK', 'CAMPAÑA', 'LOCALES'];
  return (
    <Box
      display={{ base: isOpen ? 'flex' : 'none', md: 'block' }}
      flex={{ base: 1 }}
      marginBottom={{ base: 5, lg: 1 }}
      marginRight={5}
      marginTop={{ base: 2, lg: 1 }}
    >
      <Stack
        alignItems="center"
        direction={{ base: 'column', lg: 'row' }}
        justify={{ base: 'center', lg: 'flex-start' }}
        pt={{ base: 2, lg: 0 }}
        spacing={{ base: 3, lg: 20 }}
        width="100%"
      >
        {listLinks.map((link, index) => (
          <Link key={index}>
            <Text
              _hover={{ textDecoration: 'none', color: 'blue.200' }}
              color="white"
              display="block"
            >
              {link}
            </Text>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
