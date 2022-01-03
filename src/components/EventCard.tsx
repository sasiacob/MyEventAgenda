import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IEvent} from '../data/models';
import {Text} from '.';
import {Colors, GlobalStyles as s} from '../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  EventDetails: {id: string | number};
};

const EventCard = ({event}: {event: IEvent & {noPropDefined?: string}}) => {
  const {eventType, clientName, menu, peopleNo, noPropDefined = 'ada'} = event;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleCardPress = () => {
    navigation.navigate('EventDetails', {id: event.id});
  };
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={handleCardPress}>
      <View style={[s.shadowed, styles.cardContainer]}>
        <Text style={styles.cardTitle}>{eventType}</Text>
        <Text weight="light">{clientName}</Text>
        <Text>{menu}</Text>
        <Text weight="bold">{peopleNo.toString()}</Text>
        <Text>{noPropDefined}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(EventCard);

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: Colors.secondary[200],
    width: '100%',
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: RFValue(20),
  },
});
