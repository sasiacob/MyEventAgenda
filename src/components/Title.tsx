import React, {FunctionComponent} from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from '.';
import {Colors} from '../theme';

const Title: FunctionComponent<TextProps> = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(30),
    fontWeight: '600',
    color: Colors.secondary[500],
    marginBottom:20, 
  },
});
