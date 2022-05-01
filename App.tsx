/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';

import BaseBox from './src/common/components/BaseBox';
import BaseHeader from './src/common/components/BaseHeader';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <BaseHeader />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
