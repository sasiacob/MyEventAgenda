import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '.';
import {Colors, rSpacing} from '../theme';
interface IAccountOptionProps {
  text: string;
  onPress: () => void;
}
const AccountOption = ({text, onPress}: IAccountOptionProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.container]}>
        <Text size='large' weight='medium'>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AccountOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    padding: rSpacing.regural,
    width: '100%',
   // borderBottomWidth: StyleSheet.hairlineWidth,
   borderBottomWidth:0.2,
    borderColor: Colors.secondary[500],
  },
});
