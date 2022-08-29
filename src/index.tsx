import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen from './screens/List';
import CreateUser from './screens/CreateUser';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="CreateUser" component={CreateUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainScreen;
