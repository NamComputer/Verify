import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';


export const RectangleButton = ({
  title,
  onpress,
  buttonColor,
  txtColor,
}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View
        style={[
          styles.rectangleButton,
          styles.shadow,
          {backgroundColor: buttonColor},
        ]}>
        <Text style={[styles.btnText, {color: txtColor}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
