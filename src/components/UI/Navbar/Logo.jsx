import React from 'react';
import { Box, Image, Stack } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Stack>
      <Image
        height={{ base: '20px', lg: '30px' }}
        src="../../assets/logo.svg"
        width={{ base: '140px', lg: '206px' }}
      />
    </Stack>
  );
};

export default Logo;
