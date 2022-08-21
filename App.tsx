/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainScreen from './src';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0D47A1',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <MainScreen />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
