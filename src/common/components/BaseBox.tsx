import React from 'react';

import {Box} from 'native-base';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BaseBox = ({children}: any) => {
  const safeArea = useSafeAreaInsets();

  return <Box height={safeArea.top}>{children}</Box>;
};

export default BaseBox;
