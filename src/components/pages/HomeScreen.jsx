import React from 'react';
import { Box, Container, Divider, Text } from '@chakra-ui/react';

import { CardProduct } from '../products/CardProduct';
import { Footer } from '../UI/Footer/Footer';
import { Navbar } from '../UI/Navbar/Navbar';

export const HomeScreen = () => {
  const products = [
    {
      img: '../../../assets/productos/zapatilla_1.jpg',
      title: 'Zapatilla 1-XFX',
      price: '$5000',
    },
    {
      img: './../../assets/productos/zapatilla_2.jpg',
      title: 'Zapatilla 2000-X',
      price: '$9800',
    },
    {
      img: './../../assets/productos/zapatilla_3.jpg',
      title: 'Zapatilla 3 Run',
      price: '$6500',
    },
  ];

  return (
    <div>
      <Navbar />
      <Container mb="10" minHeight="100vh">
        <Text fontSize="24px" fontWeight="bold" mt="3">
          Zapatillas
        </Text>
        <Box border="1px solid #030B1C" />
        {products.map((item, index) => (
          <CardProduct key={index} {...item} />
        ))}
      </Container>
      <Footer />
    </div>
  );
};
