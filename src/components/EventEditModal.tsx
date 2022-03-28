import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CheckBox, Icon, Overlay} from 'react-native-elements';
import {Colors, rSpacing} from '../theme';
import {IEvent} from '../data/models';
import globalStyles from '../theme/constants/globalStyles';
import {Button, Input, Text, Title} from '.';

interface IEventEditModal {
  event?: IEvent;
  isVisible?: boolean;
  onClose: () => void;
  onSubmit: (eventDetails: IEvent) => void;
}
const EventEditModal = ({
  event,
  isVisible = false,
  onClose,
  onSubmit,
}: IEventEditModal) => {
  const initialValues: IEvent = {
    menu: '',
    id: '',
    eventType: '',
    clientName: '',
    phoneNumber: '',
    peopleNo: 0,
    date: Date.now(),
    reservationFee: 0,
    menuPrice: 0,
    totalPrice: 0,
    payableRest: 0,
    takeout: false,
    otherDetails: '',
  };
  enum placeholders {
    menu = 'Enter menu...',
    clientName = 'Enter client name...',
    phoneNumber = 'Enter phone number...',
    peopleNo = '0',
    reservationFee = '0',
    totalPrice = '0',
    menuPrice = '0',
    takeout = 'No',
    payableRest = '0',
    otherDetails = 'Other event details...',
  }

  // if an event is passed, then is for edit, else is for creating a new one.
  const [eventDetails, setEventDetails] = useState(event ?? initialValues);
  const handleClose = () => {
    onClose();
  };
  const handleChange = (value: string | boolean, field: string) => {
    setEventDetails(event => {
      return {...event, [field]: value};
    });
  };
  const handleReset = () => {
    setEventDetails(initialValues);
  };
  const handleSubmit = () => {
    if (!eventDetails.id) eventDetails.id = (Math.random() * 10).toString();
    onSubmit(eventDetails);
  };

  return (
    <Overlay
      animationType="slide"
      isVisible={isVisible}
      overlayStyle={styles.wrapper}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={[globalStyles.fill]}>
            <View style={styles.titleContainer}>
              <Text size="xLarge">{event ? 'Edit event' : 'Add event'}</Text>
            </View>
            <Input
              value={eventDetails.clientName}
              onChangeText={text => handleChange(text, 'clientName')}
              placeholder={placeholders.clientName}
              label={'Client name'}
            />
            <Input
              value={eventDetails.phoneNumber}
              onChangeText={text => handleChange(text, 'phoneNumber')}
              placeholder={placeholders.phoneNumber}
              label="Phone number"
            />

            <Input
              value={eventDetails.menu.toString()}
              onChangeText={text => handleChange(text, 'menu')}
              placeholder={placeholders.menu}
              multiline
              label="Menu"
            />
            <Input
              value={eventDetails.peopleNo.toString()}
              onChangeText={text => handleChange(text, 'peopleNo')}
              placeholder={placeholders.peopleNo.toString()}
              keyboardType="numeric"
              label="People number"
            />
            <Input
              value={eventDetails.menuPrice.toString()}
              onChangeText={text => handleChange(text, 'menuPrice')}
              placeholder={placeholders.menuPrice}
              keyboardType="numeric"
              label="Menu Price"
            />
            <Input
              value={eventDetails.reservationFee.toString()}
              onChangeText={text => handleChange(text, 'reservationFee')}
              placeholder={placeholders.reservationFee}
              keyboardType="numeric"
              label="Reservation fee"
            />
            <Input
              value={eventDetails.otherDetails.toString()}
              onChangeText={text => handleChange(text, 'otherDetails')}
              placeholder={placeholders.otherDetails}
              label="Other details"
            />
            <CheckBox
              title={'Takeout'}
              checked={eventDetails.takeout}
              onPress={() => handleChange(!eventDetails.takeout, 'takeout')}
            />
            <View style={[globalStyles.centeredRow, styles.btnContainer]}>
              <Button btnType="danger" title="Reset" onPress={handleReset} />
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </View>
          <View style={styles.closeIconContainer}>
            <Icon
              name="closecircle"
              type="antdesign"
              color={Colors.lightGray}
              size={30}
              tvParallaxProperties={undefined}
              onPress={handleClose}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Overlay>
  );
};

export default EventEditModal;

const styles = StyleSheet.create({
  wrapper: {
    padding: rSpacing.regural,
    height: '90%',
    width: '90%',
    borderRadius: 20,
  },
  container: {},
  closeIconContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  btnContainer: {
    marginTop: 10,
    justifyContent: 'space-around',
  },
  titleContainer: {
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
});
