import 'react-native-gesture-handler';
import React from 'react';
import SnapCapture from './views/SnapCapture';
import SnapPreview from './views/SnapPreview';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const navigationOptions = {
    headerShown: true
  };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SnapCapture"
        screenOptions={navigationOptions}>
        <Stack.Screen name="SnapCapture" component={SnapCapture} />
        <Stack.Screen name="SnapPreview" component={SnapPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
