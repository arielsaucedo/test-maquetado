import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const AccordionMenu = ({ name, menu }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton backgroundColor="#E4E8EE">
          <Box flex="1">
            <Text fontSize="16px" fontWeight="bold" ml="5" textAlign="left">
              {name}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {menu.map((menu, index) => (
            <Text key={index} fontSize="16px" ml="5">
              {menu}
            </Text>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
