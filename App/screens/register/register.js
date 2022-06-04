import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '../../theme/color';
import {widthPercentageToDP as scaleWidth} from 'react-native-responsive-screen';
import React, { useState, Component } from 'react';
import { RectangleButton } from '../../components/RectangleButton';
import { Container, Content, Input, Item } from 'native-base';
import { graphql } from 'graphql';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';


const SIGNUP = gql`
mutation AddtoRegister($username: String!, $password: String!){
  signup(signupInput: {
    username: $username,
    password: $password
  }) {
    id
    username
  }
}
`;



const Register = ({navigation}) => {
  
    const handleInputChange = (field, value) => {
      const newState = {
        ...this.state,
        [field]: value,
      };
      setState(newState);
    };

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [emailError, setEmailError] = useState(false);
      const [passwordError, setPasswordError] = useState(false);
      const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const handleSubmit = () => {
    
      // const { email, password, confirmPassword } = this.state;
      if (email.length === 0) {
        // return this.setState({ emailError: true });
        setEmailError(true)
      }
      // this.setState({ emailError: false });
      setEmailError(false)
      if (password.length === 0) {
        // return this.setState({ passwordError: true });
        setPasswordError(true)
      }
      setPasswordError(false);

      if (confirmPassword.length === 0) {
        // return this.setState({ confirmPasswordError: true });
        setConfirmPasswordError(true)
      }
      setConfirmPasswordError(false)

      // this.setState({ confirmPasswordError: false });

      if (password !== confirmPassword) {
        // return this.setState({ passwordError: true, confirmPasswordError: true });
        setPasswordError(true);
        setConfirmPasswordError(true)
      }
      // this.setState({ passwordError: false, confirmPasswordError: false });
      setPasswordError(false);
      setConfirmPasswordError(false)

      // return this.props.screenProps.changeLoginState(true);
    };

    // const { navigation } = this.props;
    // const { emailError, passwordError, confirmPasswordError } = this.state;
    const [signup, { data, loading, error }] = useMutation(SIGNUP);
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('')
    
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
                    //onChangeText={value => handleInputChange('email', value)}
                    placeholderTextColor={Colors.hint}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText = {newUser => setNewUser(newUser)}
                    value={newUser}
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
                    //onChangeText={value => handleInputChange('password', value)}
                    onChangeText = {newPassword => setNewPassword(newPassword) }
                    placeholderTextColor={Colors.hint}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={newPassword}
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
                  //onChangeText={value => handleInputChange('confirmPassword', value)}
                  onChangeText = {newPassword => setNewPassword(newPassword) }
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
                onpress={async () => {
                  // handleSubmit()
                await signup({ variables: { username: newUser, password: newPassword } })
                // await AsyncStorage.setItem("token", result.data.login.accessToken)
                // navigation.navigate('Main')
                navigation.navigate('Login')
                }}
                buttonColor={Colors.button}
                title={loading ? 'Registering...' : 'Register'}
              />
          </View>
        </View>
        </Content>
    </Container>
    );
  }

export default Register;

//Error in here
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
