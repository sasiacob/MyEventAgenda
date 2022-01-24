import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IEvent} from '../data/models';
import {Text} from '.';
import {Colors, GlobalStyles as s} from '../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

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
      <View style={[styles.cardContainer]}>
        <LinearGradient
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 0.1}}
          style={[{padding: 20, borderRadius: 10}]}
          colors={['#fff', Colors.light]}>
          <Text style={styles.cardTitle}>{eventType}</Text>
          <Text weight="light">{clientName}</Text>
          <Text>{menu}</Text>
          <Text weight="bold">{peopleNo.toString()}</Text>
          <Text>{noPropDefined}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(EventCard);

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: RFValue(20),
  },
});
