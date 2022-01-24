import React, {FunctionComponent} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../theme';

export interface ICustomTextProps extends TextProps {
  weight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold';
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'xLarge';
}
const Text: FunctionComponent<ICustomTextProps> = ({
  style,
  children,
  weight = 'regular',
  size = 'normal',
}) => {
  return (
    <RNText style={[styles.text, styles[weight], styles[size], style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.gray,
  },
  thin: {fontFamily: 'Montserrat-Thin'},
  light: {fontFamily: 'Montserrat-Light'},
  regular: {fontFamily: 'Montserrat-Regular'},
  medium: {fontFamily: 'Montserrat-Medium'},
  bold: {fontFamily: 'Montserrat-Bold'},

  tiny: {
    fontSize: RFValue(10),
  },
  small: {
    fontSize: RFValue(12),
  },
  normal: {
    fontSize: RFValue(14),
  },
  large: {
    fontSize: RFValue(16),
  },
  xLarge: {
    fontSize: RFValue(20),
  },
});
export default Text;
