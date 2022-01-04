import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AccountScreen, EventDetails} from '../screens';
import {Colors} from '../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Title} from '../components';
import {View} from 'react-native';
const Stack = createStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="EventDetails" component={EventDetails} />
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
