import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Main';

const Stack = createStackNavigator();
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
