import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { categories } from '../../data/categories';
import { sizes } from '../../data/sizes';
import { colors } from '../../data/colors';

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
        <Box backgroundColor="#E4E8EE">
          <Text fontSize="16px" fontWeight="bold" mb="2" ml="5">
            Categoria
          </Text>
        </Box>

        {categories.map((cat, index) => (
          <Text key={index} fontSize="16px" ml="5">
            {cat}
          </Text>
        ))}
        <br />
        <Box backgroundColor="#E4E8EE">
          <Text fontSize="16px" fontWeight="bold" mb="2" ml="5">
            Talle
          </Text>
        </Box>
        {sizes.map((size, index) => (
          <Text key={index} fontSize="16px" ml="5">
            {size}
          </Text>
        ))}
        <br />
        <Box backgroundColor="#E4E8EE">
          <Text fontSize="16px" fontWeight="bold" mb="2" ml="5">
            Color
          </Text>
        </Box>
        {colors.map((color, index) => (
          <Text key={index} fontSize="16px" ml="5">
            {color}
          </Text>
        ))}
      </Box>
    </Box>
  );
};
