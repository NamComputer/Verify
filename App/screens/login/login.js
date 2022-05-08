import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '../../theme/color';
import {widthPercentageToDP as scaleWidth} from 'react-native-responsive-screen';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

export function Login ({navigation}) {
  const [isChecked, setChecked] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>This is header!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.subBody}>        
          <Image source={require('../../assets/images/mail.png')} />
          <TextInput 
            maxLength={30}
            style={styles.input}
            placeholder={'Email Adress'}
            placeholderTextColor={Colors.hint}
            autoCapitalize="none"
            />
        </View>
        <View style={styles.subBody}> 
          <Image source={require('../../assets/images/lock.png')} />
          <TextInput 
            maxLength={30}
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={Colors.hint}
            autoCapitalize="none"
            />
        </View>
        <View style={styles.passWordSection}> 
          <View style={styles.chkboxNvalue}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.textOfCheckbox}>Remember Me</Text>
          </View>
            <TouchableOpacity
              onPress={() => Alert.alert('You Pressed')}>
              <Text style={styles.secondTextofCheckbox}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View styles={styles.footer}>
        <Button onPress={()=>navigation.navigate('Register')}  title="register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: .3,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  body: {
    flex:.5,
    justifyContent:'center',
    flexDirection:'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  subBody:{
    justifyContent:'center',
    flexDirection:'row',
    alignContent: 'center',
    alignItems: 'center',
    marginRight:10,
  },
  passWordSection:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    marginLeft: scaleWidth(11),
  },
  footer: {
    flex:.5,
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: scaleWidth(80),
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.hint,
    alignSelf: 'center',
    fontSize: 14,
  },
  chkboxNvalue: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    right: 35,
  },
  textOfCheckbox:{
    margin:10,
    color:Colors.textOfCheckbox,
    fontWeight:'bold'
  },
  secondTextofCheckbox:{
    color:Colors.secondTextOfCheckbox,
    fontWeight:'bold'
  }
});
