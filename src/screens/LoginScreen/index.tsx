import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Title} from '../../components';
import s from '../../theme/constants/globalStyles';
import {rSpacing} from '../../theme';

import {Button, Input} from '../../components';
import GroupSelector from '../../components/GroupSelector';
import {useDispatch} from 'react-redux';
import {setSelectedGroup, signIn} from '../../store/auth/authActions';
const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const handleLoginPress = () => {
    setVisible(true);
    //dispatch(signIn('mockjwt'));
  };
  const handleCloseModal = (selectedGroupId: string) => {
    dispatch(setSelectedGroup(selectedGroupId));
    setVisible(false);
    setTimeout(() => {
      dispatch(signIn('jwtToken'));
    }, 500);
  };
  return (
    <View style={[s.fillAndCenter, styles.container]}>
      <Title>Login</Title>
      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <Input
        placeholder="Enter password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title={'Next'} onPress={handleLoginPress} />
      <GroupSelector onClose={handleCloseModal} isVisible={visible} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: rSpacing.regural,
  },
});
