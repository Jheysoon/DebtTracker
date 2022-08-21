/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainScreen from './src';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <MainScreen />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
