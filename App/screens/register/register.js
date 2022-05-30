import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '../../theme/color';
import {widthPercentageToDP as scaleWidth} from 'react-native-responsive-screen';
import React, { useState, Component } from 'react';
import { RectangleButton } from '../../components/RectangleButton';
import { Container, Content, Input, Item } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      confirmPassword: '',
      confirmPasswordError: false,
    };
  }

  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value,
    };
    this.setState(newState);
  };

  handleSubmit = () => {
    const { email, password, confirmPassword } = this.state;
    if (email.length === 0) {
      return this.setState({ emailError: true });
    }
    this.setState({ emailError: false });

    if (password.length === 0) {
      return this.setState({ passwordError: true });
    }
    this.setState({ passwordError: false });

    if (confirmPassword.length === 0) {
      return this.setState({ confirmPasswordError: true });
    }
    this.setState({ confirmPasswordError: false });

    if (password !== confirmPassword) {
      return this.setState({ passwordError: true, confirmPasswordError: true });
    }
    this.setState({ passwordError: false, confirmPasswordError: false });

    return this.props.screenProps.changeLoginState(true);
  };

render () {
  const { navigation } = this.props;
  const { emailError, passwordError, confirmPasswordError } = this.state;

  return (
    <Container>
      <Content>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Text style={styles.notHyperLink}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Register)}>
            <Text style={styles.hyperLink}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.subBody}>        
            <Image source={require('../../assets/images/Name.png')} />
            <Item> 
              <Input 
                maxLength={30}
                style={styles.input}
                placeholder={'Your Name'}
                placeholderTextColor={Colors.hint}
                autoCapitalize="none"
                />
              </Item>
          </View>
          <View style={styles.subBody}>      
              <Image source={require('../../assets/images/mail.png')} />
              <Item error={emailError}>
                <Input 
                  maxLength={30}
                  style={styles.input}
                  placeholder={'Email Adress'}
                  onChangeText={value => this.handleInputChange('email', value)}
                  placeholderTextColor={Colors.hint}
                  autoCapitalize="none"
                  autoCorrect={false}
                  />
              </Item>
            </View>
            <View style={styles.subBody}> 
              <Image source={require('../../assets/images/lock.png')} />
              <Item error={passwordError}>
                <Input 
                  maxLength={30}
                  style={styles.input}
                  placeholder={'Password'}
                  onChangeText={value => this.handleInputChange('password', value)}
                  placeholderTextColor={Colors.hint}
                  autoCapitalize="none"
                  autoCorrect={false}
                  />
              </Item>
          </View>
          
          <View style={styles.subBody}> 
            <Image source={require('../../assets/images/lock.png')} />
            <Item error={confirmPasswordError}>
              <Input 
                maxLength={30}
                style={styles.input}
                placeholder={'ReEnter Password'}
                onChangeText={value => this.handleInputChange('confirmPassword', value)}
                placeholderTextColor={Colors.hint}
                autoCapitalize="none"
                autoCorrect={false}
                />
            </Item>
          </View>
          <View style={styles.passWordSection}>      
              <Text style={styles.textOfCheckbox}>By joining in you are agreeing our</Text>
              <TouchableOpacity
                onPress={() => Alert.alert('You Pressed')}>
                <Text style={styles.secondTextofCheckbox}>Term and privacy policy</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <RectangleButton
              title={'Register'}
              onpress={() =>
                this.handleSubmit()
              }
              buttonColor={Colors.button}
              txtColor={Colors.white}
            />
        </View>
      </View>
      </Content>
  </Container>
  );
}
}

export default Register;

// Error in here
// export default graphql(
//   gql`
//       signup(signupInput: {
//          username: $email,
//          password: $password
//        }) {
//          id
//          username
//        }
//   `,
//   {
//     props: ({ mutate }) => ({
//       signup: (username, password) => mutate({ variables: { username, password } }),
//     }),
//   },
// )(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: .2,
    flexDirection:'row',
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
    marginLeft:30

  },
  passWordSection:{
    marginTop:20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
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
    fontSize: 20,
  },
  chkboxNvalue: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    right: 35,
  },
  textOfCheckbox:{
    color:Colors.textOfCheckbox,
    fontWeight:'bold'
  },
  secondTextofCheckbox:{
    color:Colors.secondTextOfCheckbox,
    fontWeight:'bold'
  },
  hyperLink: {
    color: Colors.button,
    fontFamily: 'Arial',
    margin: 10,
    fontSize: 20,
  },
  notHyperLink: {
    color: Colors.notChosen,
    fontFamily: 'Arial',
    margin: 10,
    fontSize: 20,
  },
});
