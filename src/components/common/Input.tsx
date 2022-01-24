import React from 'react';
import {Input as RNEInput, InputProps} from 'react-native-elements';

const Input = (props: InputProps) => {
  return <RNEInput  autoCompleteType={undefined} {...props} />;
};

export default Input;
