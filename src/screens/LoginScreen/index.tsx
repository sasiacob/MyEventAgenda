import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Title} from '../../components';
import s from '../../theme/constants/globalStyles';
import {rSpacing, spacing} from '../../theme';
import {Input} from 'react-native-elements';
const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <SafeAreaView style={s.fill}>
      <View style={[s.fillAndCenter, styles.container]}>
        <Title>Login</Title>
        <Input
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
          autoCompleteType={undefined}
        />
        <Input
          placeholder="Enter password"
          onChangeText={setPassword}
          value={password}
          autoCompleteType={undefined}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: rSpacing.regural,
  },
});
