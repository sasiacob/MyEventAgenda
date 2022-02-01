import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowed: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bordered: {
    borderWidth: 1,
  },
  text: {},
  title: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
  },
  fill: {flex: 1},
  fillAndCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredRow: {
    flexDirection:'row', 
    alignContent:'center'
  }, 
  
  
});
