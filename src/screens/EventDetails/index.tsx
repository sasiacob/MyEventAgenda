import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '../../store/rootReducer';
import {Text} from '../../components';
import {Colors, rSpacing, GlobalStyles as s} from '../../theme';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
type RootStackParamList = {
  EventDetails: {id: string | number};
};

type Props = NativeStackScreenProps<RootStackParamList, 'EventDetails'>;
const EventDetails = ({navigation, route}: Props) => {
  const eventId = route.params.id;
  const event = useSelector((state: IRootState) =>
    state.user.events.find(event => event.id === eventId),
  );
  enum undefinedValues {
    UNDEFINED = 'Undefined',
    NOT_SELECTED = 'Not selected',
    NOT_AVAILABLE = 'Not available',
  }
  enum eventKeys {
    clientName = 'Client Name',
    date = 'Date',
    eventType = 'Event type',
    menu = 'Menu',
    menuPrice = 'Menu Price',
    otherDetails = 'Other details',
    payableRest = 'Payable Rest',
    peopleNo = 'People number',
    phoneNumber = 'Phone number',
    reservationFee = 'Reservation fee',
    takeout = 'Takeout',
    totalPrice = 'Total Price',
    id = 'ID',
  }
  const {
    clientName,
    date,
    eventType,
    id,
    menu,
    menuPrice,
    otherDetails,
    payableRest,
    peopleNo,
    phoneNumber,
    reservationFee,
    takeout,
    totalPrice,
  } = event ?? {};

  const handleDeletePress = () => {};
  const handleEditPress = () => {};

  if (!event) {
    return (
      <View style={styles.wrapper}>
        <Text>No item</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={[s.shadowed, styles.wrapper]}>
        <Row
          keyProp={eventKeys.eventType}
          value={eventType ?? undefinedValues.UNDEFINED}
        />
        <Row
          keyProp={eventKeys.clientName}
          value={clientName ?? undefinedValues.UNDEFINED}
        />
        <Row
          keyProp={eventKeys.date}
          value={date?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.menuPrice}
          value={menuPrice?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.peopleNo}
          value={peopleNo?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.takeout}
          value={takeout ? 'Yes' : 'No' ?? undefinedValues.UNDEFINED}
        />
        <Row
          keyProp={eventKeys.phoneNumber}
          value={phoneNumber ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.reservationFee}
          value={reservationFee?.toString() ?? undefinedValues.UNDEFINED}
        />
        <Row
          keyProp={eventKeys.totalPrice}
          value={totalPrice?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.payableRest}
          value={payableRest?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.otherDetails}
          value={otherDetails?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.menu}
          value={menu?.toString() ?? undefinedValues.NOT_SELECTED}
        />
        <Row
          keyProp={eventKeys.id}
          value={id?.toString() ?? undefinedValues.NOT_SELECTED}
        />
      </View>
      <View style={[styles.rowContainer, {margin: rSpacing.regural}]}>
        <Icon
          name="edit"
          color={Colors.secondary[500]}
          containerStyle={styles.iconContainer}
          size={RFValue(30)}
          onPress={handleEditPress}
          tvParallaxProperties={undefined}
        />
        <Icon
          name="delete"
          color={Colors.secondary[500]}
          containerStyle={styles.iconContainer}
          onPress={handleDeletePress}
          size={RFValue(30)}
          tvParallaxProperties={undefined}
        />
      </View>
    </ScrollView>
  );
};

const Row = ({keyProp, value}: {keyProp: string; value: string}) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Text>{keyProp}</Text>
        <Text>{value}</Text>
      </View>
      <View style={styles.border} />
    </View>
  );
};
export default EventDetails;

const styles = StyleSheet.create({
  wrapper: {
    padding: rSpacing.regural,
    borderRadius: rSpacing.small,
    backgroundColor: Colors.light,
    minHeight: '50%',
    margin: rSpacing.regural,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: rSpacing.tiny,
  },
  iconContainer: {
    borderRadius: 50,
    backgroundColor: Colors.primary,
    padding: rSpacing.small,
  },
  border: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary[300],
    alignSelf:'flex-start',
    marginBottom: rSpacing.regural
  },
});
