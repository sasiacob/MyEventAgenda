import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import {AccountStack, HomeStack} from './StackNavigators';

import {Colors} from '../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: RFValue(12)},
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              color={color}
              size={RFValue(size)}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: 'Account',
          tabBarShowLabel: true,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="account-circle"
              color={color}
              size={RFValue(size)}
              tvParallaxProperties={undefined}
            />
          ),
          tabBarLabelStyle: {fontSize: RFValue(12)},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
