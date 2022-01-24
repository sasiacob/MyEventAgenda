import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import gs from '../../theme/constants/globalStyles';
import {Screen, Text} from '../../components';
import {Colors, rSpacing} from '../../theme';

const UsersScreen = () => {
  const users = [
    {id: '233r2ff', screenName: 'Nick'},

    {id: '23312r2ff', screenName: 'Tom'},
    {id: '23312fr2ff', screenName: 'Mathias'},
  ];
  return (
    <Screen title="Users">
      <ScrollView style={{ flexGrow:1, padding:4, }}>
        <View style={styles.wrapper}>
          {users.map(user => (
            <View key={user.id} style={[gs.shadowed, styles.card]}>
              <Text >{user.id}</Text>
              <Text>{user.screenName}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  card: {
    marginBottom: rSpacing.regural,
    padding: rSpacing.regural,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
   backgroundColor: Colors.light,
  },
});
