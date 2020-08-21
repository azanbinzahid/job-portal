import React from 'react';
import {Item, Label, Input, Text} from 'native-base';

export default function TextInput({
  label,
  value,
  errors,
  handleChange,
  handleBlur,
  name,
  multiline,
}) {
  return (
    <>
      <Item floatingLabel>
        {label ? <Label>{label}</Label> : null}
        {multiline ? (
          <Input
            multiline={true}
            numberOfLines={5}
            value={value}
            onChangeText={handleChange(name)}
            onBlurText={handleBlur(name)}
          />
        ) : (
          <Input
            value={value}
            onChangeText={handleChange(name)}
            onBlurText={handleBlur(name)}
          />
        )}
      </Item>
      <Text style={StyleSheet.text}>{errors}</Text>
    </>
  );
}

const StyleSheet = {
  text: {
    alignSelf: 'center',
    textAlign: 'center',
  },
};
