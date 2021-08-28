import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/react';

export const MenuLinks = ({ isOpen }) => {
  const listLinks = ['SALE', 'E-SHOP', 'LOOKBOOK', 'CAMPAÑA', 'LOCALES'];
  return (
    <Box
      display={{ base: isOpen ? 'flex' : 'none', md: 'block' }}
      flex={{ base: 1 }}
      marginRight={5}
      marginTop={{ base: 5, lg: 1 }}
      order={{ base: 1 }}
    >
      <Stack
        alignItems="center"
        direction={['column', 'column', 'row', 'row']}
        justify={['center, space-between', 'flex-start', 'flex-start']}
        pt={[4, 4, 0, 0]}
        spacing={20}
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
