import {StyleSheet, View} from 'react-native';
import {Overlay, OverlayProps} from 'react-native-elements';
import React, {useState} from 'react';
import {IGroup} from '../data/models';
import {rSpacing} from '../theme';
import {Text} from '.';
import Option from './Option';
import {Button} from './common';
import {useDispatch} from 'react-redux';
import {setSelectedGroup} from '../store/auth/authActions';
interface IGroupSelector extends OverlayProps {
  groups?: IGroup[];
  onClose: (selectedId: string) => void;
}
const GroupSelector = ({groups, onClose, ...modalProps}: IGroupSelector) => {
  const mockGroups = [
    {
      id: '23324ub23b3',
      screenName: 'Restaurant KFA',
      name: 'rest_kfa',
    },
    {
      id: '23324ub2ss3b3',
      screenName: 'Restaurant McBurger',
      name: 'rest_mc_burger',
    },
  ];
  const [mockingGroups, setMockingGroups] = useState<IGroup[]>(mockGroups);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const dispatch = useDispatch();
  const onSubmitPress = () => {
    // dispatch(setSelectedGroup(mockingGroups[selectedGroupIndex].id.toString()));
    onClose(mockingGroups[selectedGroupIndex].id.toString());
  };

  return (
    <Overlay
      //overlayStyle={[styles.container, overlayStyle]}
      {...modalProps}>
      <View style={styles.container}>
        <View>
          <Text>Please select an account from the list below</Text>
        </View>
        <View style={styles.optionContainer}>
          {mockingGroups.map((group, index) => (
            <Option
              text={group.screenName}
              key={group.id}
              selected={index === selectedGroupIndex}
              onPress={() => setSelectedGroupIndex(index)}
            />
          ))}
        </View>
        <Button title={'Next'} onPress={onSubmitPress} />
      </View>
    </Overlay>
  );
};

export default GroupSelector;

const styles = StyleSheet.create({
  container: {
    padding: rSpacing.large,
  },
  optionContainer: {
    marginVertical: rSpacing.xLarge,
  },
});
