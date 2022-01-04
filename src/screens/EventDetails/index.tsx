import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '../../store/rootReducer';
import {Text} from '../../components';
type RootStackParamList = {
  EventDetails: {id: string | number};
};

type Props = NativeStackScreenProps<RootStackParamList, 'EventDetails'>;
const EventDetails = ({navigation, route}: Props) => {
  const eventId = route.params.id;
  const event = useSelector((state: IRootState) =>
    state.user.events.find(event => event.id === eventId),
  );
  if (!event)
    return (
      <View>
        <Text>No item</Text>
      </View>
    );
  return (
    <View>
      <Text>{event.menu}</Text>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({});
