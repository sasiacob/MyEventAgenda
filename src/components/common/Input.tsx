import React from 'react';
import {Input as RNEInput, InputProps} from 'react-native-elements';

const Input = (props: InputProps) => {
  return <RNEInput clearButtonMode='while-editing' autoCompleteType={undefined} {...props} />;
};

export default Input;
