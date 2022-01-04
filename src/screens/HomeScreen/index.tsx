import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {FlatList, StyleSheet, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {Title} from '../../components';
import EventCard from '../../components/EventCard';
import {IEvent} from '../../data/models';
import {IRootState} from '../../store/rootReducer';
import {Colors} from '../../theme';

const HomeScreen = () => {
  const events = useSelector((state: IRootState) => state.user.events);
  const renderItem = ({item}: {item: IEvent}) => <EventCard event={item} />;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: 0,
      // easing: Easing.back(0),
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [position]);

  return (
    // <SafeAreaView style={{flex: 1}}>

    <LinearGradient
      colors={[
        Colors.secondary[500],
        Colors.secondary[300],
        Colors.secondary[200],
      ]}
      start={{x: 0.5, y: 0.5}}
      end={{x: 0, y: 0}}
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        padding: 25,
      }}>
      <Animated.FlatList
        style={{transform: [{translateY: position}]}}
        contentContainerStyle={styles.eventsContainer}
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <Title>Future Events</Title>}
      />
    </LinearGradient>

    //    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  eventsContainer: {
    //flex:
    marginTop: 20,
  },
});
