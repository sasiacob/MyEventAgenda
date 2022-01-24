import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '.';
import {ICustomTextProps} from './common/Text';
import {Colors, rSpacing} from '../theme';
import {Icon} from 'react-native-elements';

interface IOption {
  selected?: boolean;
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: ICustomTextProps;
}
const Option = ({
  selected = false,
  text,
  onPress,
  style,
  textStyle,
}: IOption) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text {...textStyle}>{text}</Text>
        <Icon
          name={selected ? 'radio-button-on' : 'radio-button-off'}
          type="material"
          tvParallaxProperties={undefined}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.light,
    padding: rSpacing.small,
    borderBottomWidth: 0.18,
    borderBottomColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //borderBottomColor: Colors.gray,
  },
});
