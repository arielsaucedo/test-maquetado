import React from 'react';
import { Box, Divider, Image, Text } from '@chakra-ui/react';

export const CardProduct = ({ img, title, price }) => {
  return (
    <Box>
      <Image src={img} />
      <Box>
        <Box border="1px solid #030B1C" />
      </Box>
      <Text fontSize={{ base: '20px', lg: '16px' }} mt="3">
        {title}
      </Text>
      <Text fontSize={{ base: '20px', lg: '16px' }} fontWeight="bold">
        {price}
      </Text>
    </Box>
  );
};
