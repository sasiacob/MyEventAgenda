import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, rSpacing} from '../theme';
import {Title} from '.';

interface IScreen extends ViewProps {
  title?: string;
}
const Screen = (props: IScreen) => {
  return (
    // <LinearGradient
    //   colors={[
    //     // Colors.secondary[500],
    //     // Colors.secondary[300],
    //     // Colors.secondary[200],
    //     Colors.light,
    //     Colors.light
    //   ]}
    //   start={{x: 0.5, y: 0.5}}
    //   end={{x: 0, y: 0}}
    <View style={styles.wrapper}>
      <Title>{props?.title}</Title>
      {props.children}
    </View>
    // </LinearGradient>
  );
};

export default Screen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: Colors.dark,
    padding: rSpacing.regural,
  },
});
