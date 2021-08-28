import React from 'react';
import { Box, Divider, Image, Text } from '@chakra-ui/react';

export const CardProduct = ({ img, title, price }) => {
  return (
    <Box>
      <Image src={img} />
      <Box>
        <Box border="1px solid #030B1C" />
      </Box>
      <Text fontSize="20px" mt="3">
        {title}
      </Text>
      <Text fontSize="20px" fontWeight="bold">
        {price}
      </Text>
    </Box>
  );
};
