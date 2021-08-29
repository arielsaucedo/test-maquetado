import React from 'react';
import { Box, Container, Divider, Flex, Grid, Stack, Text } from '@chakra-ui/react';

import { CardProduct } from '../products/CardProduct';
import { Footer } from '../UI/Footer/Footer';
import { Navbar } from '../UI/Navbar/Navbar';

import { productsList } from '../../data/productsList';
import { MenuProducts } from '../products/MenuProducts';

export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Container maxW="container.lg" mb="10" minHeight="100vh">
        <Text display={{ base: 'block', lg: 'none' }} fontSize="24px" fontWeight="bold" mt="3">
          Zapatillas
        </Text>
        <Box border="1px solid #030B1C" display={{ base: 'block', lg: 'none' }} />
        <Stack display="flex" flexDirection="row" justifyContent="center" mt="4">
          <Box mr="4">
            <MenuProducts />
          </Box>

          <Grid gap={3} templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}>
            {productsList.map((item, index) => (
              <CardProduct key={index} {...item} />
            ))}
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};
