import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import {HomeStack} from './StackNavigators';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: true,
          title: 'HomeStack',
          tabBarLabel: 'Home',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize:RFValue(10) },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
