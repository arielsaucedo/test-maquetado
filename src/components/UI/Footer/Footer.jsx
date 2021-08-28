import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
  const linksFooter = ['Ayuda', 'Contacto', 'Terminos y condiciones', 'Politica de privacidad'];

  return (
    <Stack backgroundColor="#100217E6">
      <Box fontSize="16px" m="2" textAlign="center">
        {linksFooter.map((link, index) => (
          <Link key={index}>
            <Text
              _hover={{ textDecoration: 'none', color: 'blue.200' }}
              color="white"
              mb="2"
              mt="2"
            >
              {link}
            </Text>
          </Link>
        ))}
      </Box>
    </Stack>
  );
};
