import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: RFValue(14)}}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
