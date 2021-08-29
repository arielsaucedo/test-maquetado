import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { categories } from '../../data/categories';
import { sizes } from '../../data/sizes';
import { colors } from '../../data/colors';
import { AccordionMenu } from './AccordionMenu';

export const MenuProducts = () => {
  return (
    <Box display={{ base: 'none', lg: 'block' }} width="260px">
      <Text fontSize="24px" fontWeight="bold" mt="3">
        Zapatillas
      </Text>
      <Box border="1px solid #030B1C" />
      <Text fontSize="20px" fontWeight="bold" mt="3">
        Filtrar
      </Text>
      <Box mt="4">
        <AccordionMenu menu={categories} name="Categorias" />
        <br />
        <AccordionMenu menu={sizes} name="Talle" />
        <br />
        <AccordionMenu menu={colors} name="Color" />
      </Box>
    </Box>
  );
};
