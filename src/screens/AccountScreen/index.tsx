import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {AccountOption, Title} from '../../components';

const AccountScreen = () => {
  return (
    <ScrollView>
      <Title>My account</Title>
      <AccountOption text="Settings" onPress={() => {}} />
      <AccountOption text="Log Out" onPress={() => {}} />
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
