import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {AccountOption, Text, Title} from '../../components';
import {signOut} from '../../store/auth/authActions';
import {rSpacing} from '../../theme';
import globalStyles from '../../theme/constants/globalStyles';
import {NavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
const AccountScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <ScrollView contentContainerStyle={[globalStyles.fill]}>
      <Title>My account</Title>
      <View style={[globalStyles.fill, styles.optionsContainer]}>
        <View style={globalStyles.shadowed}>

        <AccountOption
          text="Users"
          onPress={() => {
            navigation.navigate('Users');
          }}
          />
        <AccountOption
          text="Restaurants"
          onPress={() => {
            navigation.navigate('Groups');
          }}
          />
        <AccountOption
          text="Settings"
          onPress={() => {
            navigation.navigate('Settings');
          }}
          />
          </View>
        <View style={[globalStyles.fill]} />
        <AccountOption text="Log Out" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  optionsContainer: {
    marginBottom: rSpacing.regural,
  },
});
