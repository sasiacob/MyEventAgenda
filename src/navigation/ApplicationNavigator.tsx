import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Main';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoginScreen} from '../screens';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import s from '../theme/constants/globalStyles';
import {useSelector} from 'react-redux';
import {IRootState} from '../store/rootReducer';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => state.auth.authState.authenticated );
  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={s.fill}>
          <Stack.Navigator>
            {!isLoggedIn ? (
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                  animationTypeForReplace: 'push',
                }}
              />
            ) : (
              <Stack.Screen
                name="Main"
                component={MainNavigator}
                options={{headerShown: false}}
              />
            )}
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
