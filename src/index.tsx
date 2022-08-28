import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen from './screens/List';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListScreen">
          <Stack.Screen name="ListScreen" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainScreen;
