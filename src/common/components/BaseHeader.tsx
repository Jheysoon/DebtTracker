import React from 'react';
import {HStack, IconButton, Text, Box, StatusBar} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BaseHeader = () => {
  const title = 'test title';

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size={16} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon name="favorite" size={16} color="white" />} />
          <IconButton icon={<Icon name="search" size={16} color="white" />} />
          <IconButton
            icon={<Icon name="more-vert" size={16} color="white" />}
          />
        </HStack>
      </HStack>
    </>
  );
};

export default BaseHeader;
