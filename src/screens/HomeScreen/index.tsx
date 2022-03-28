import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Title} from '../../components';
import EventCard from '../../components/EventCard';
import EventEditModal from '../../components/EventEditModal';
import {IEvent} from '../../data/models';
import {IRootState} from '../../store/rootReducer';
import {addEvent} from '../../store/user/userActions';
import {Colors, rSpacing} from '../../theme';

const HomeScreen = () => {
  const events = useSelector((state: IRootState) => state.user.events);
  const [animatedValues, setAnimatedValues] = useState([]);
  const [showNextEvents, setShowNextEvents] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const dispatch = useDispatch();
  const renderItem = ({item, index}: {item: IEvent; index: number}) => (
    <Animated.View style={{opacity: animatedValues[index]}}>
      <EventCard event={item} />
    </Animated.View>
  );

  const toggleModal = () => {
    setVisibleModal(c => !c);
  };

  const handleSubmit = (event: IEvent) => {
    dispatch(addEvent(event));
    toggleModal();
  };
  return (
    <LinearGradient
      colors={[
        Colors.secondary[500],
        Colors.secondary[300],
        Colors.secondary[200],
      ]}
      start={{x: 0.5, y: 0.5}}
      end={{x: 0, y: 0}}
      style={styles.wrapper}>
      <FlatList
        contentContainerStyle={styles.eventsContainer}
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <Header
            onToggle={setShowNextEvents}
            showNextEvents={showNextEvents}
          />
        )}
      />
      <Icon
        name="pluscircle"
        activeOpacity={0.5}
        type="antdesign"
        tvParallaxProperties={undefined}
        color={Colors.primary}
        size={RFValue(40)}
        
        containerStyle={styles.addIconContainer}
        onPress={toggleModal}
      />
      {visibleModal && (
        <EventEditModal
          onSubmit={handleSubmit}
          onClose={toggleModal}
          isVisible={visibleModal}
          event={undefined}
        />
      )}
    </LinearGradient>

    //    </SafeAreaView>
  );
};

export default HomeScreen;
const Header = ({
  showNextEvents,
  onToggle,
}: {
  showNextEvents: boolean;
  onToggle: (showNext: boolean) => void;
}) => {
  return (
    <View>
      <Title>Events</Title>
      <View style={styles.dateFilterContainer}>
        <TouchableOpacity onPress={() => onToggle(false)}>
          <Text
            size="large"
            style={styles.text}
            weight={!showNextEvents ? 'bold' : 'regular'}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onToggle(true)}>
          <Text
            size="large"
            style={styles.text}
            weight={showNextEvents ? 'bold' : 'regular'}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  eventsContainer: {
    marginTop: 20,
  },
  dateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: Colors.primary[500],
    padding: RFValue(5),
    marginBottom: RFValue(5),
  },
  addIconContainer: {
    position: 'absolute',
    bottom: rSpacing.regural,
    right: rSpacing.regural,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',

    padding: rSpacing.regural,
  },
});
