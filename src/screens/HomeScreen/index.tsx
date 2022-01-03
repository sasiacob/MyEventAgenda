import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Title} from '../../components';
import EventCard from '../../components/EventCard';
import {IEvent} from '../../data/models';
import {Colors} from '../../theme';
const HomeScreen = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  useEffect(() => {
    const data = require('../../data/dummyData/events.json').events;

    setEvents(data);
  }, []);

  const renderItem = ({item}: {item: IEvent}) => <EventCard event={item} />;
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        padding: 15,

        // alignItems: 'center',
      }}>
      <FlatList
        contentContainerStyle={styles.eventsContainer}
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <Title>Events</Title>}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  eventsContainer: {
    //flex:
    marginTop: 20,
  },
});
