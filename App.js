import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen.js';
import IndustryHome from './src/screens/IndustryHome.js';
import IndustryTrans from './src/screens/IndustryTrans.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="IndustryHome" component={IndustryHome} />
        <Stack.Screen name="IndustryTrans" component={IndustryTrans} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
