import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button as RNEButton, ButtonProps} from 'react-native-elements';

interface IButton extends ButtonProps {
  btnType?: 'primary' | 'secondary' | 'danger'
}

const Button = ({btnType = 'primary', type ='clear', ...props}: IButton) => {
  return (
    <RNEButton
      type={type}
      {...props}
      titleStyle={[styles.btnText, btnType ==='danger' && styles.textDanger]}
    />
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: 'Montserrat-Medium',
  },
  textDanger:{
    color: 'red'
  }

});
