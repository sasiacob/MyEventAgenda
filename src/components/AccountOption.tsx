import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '.';
import {Colors} from '../theme';
interface IAccountOptionProps {
  text: string;
  onPress: () => void;
}
const AccountOption = ({text, onPress}: IAccountOptionProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AccountOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary[200],
    padding: 10,
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.secondary[500],
  },
});
