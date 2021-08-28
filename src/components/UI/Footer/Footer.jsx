import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
  const linksFooter = ['Ayuda', 'Contacto', 'Terminos y condiciones', 'Politica de privacidad'];

  return (
    <Stack backgroundColor="#100217E6">
      <Box
        display={{ base: 'block', lg: 'flex' }}
        fontSize="16px"
        justifyContent="center"
        m="2"
        textAlign="center"
      >
        {linksFooter.map((link, index) => (
          <Link key={index} mr={{ base: '0', lg: '10' }}>
            <Text _hover={{ textDecoration: 'none', color: 'blue.200' }} color="white" m="2">
              {link}
            </Text>
          </Link>
        ))}
      </Box>
    </Stack>
  );
};
