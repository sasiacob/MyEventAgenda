import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AccountScreen} from '../screens';
const Stack = createStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};
