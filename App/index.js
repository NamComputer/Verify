import { Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Login, Register } from './screens';
import Home from './screens/home/home';
import Wallet from './screens/wallet/wallet';
import Transactions from './screens/transactions/transactions';
import Profile from './screens/profile/profile';
import { Colors } from './theme/color';
import Scan from './screens/scan/scan';




const Tab = createMaterialBottomTabNavigator();
const BottomStackScreen = () => (
  <Tab.Navigator 
    initialRouteName="Home"
    activeColor={Colors.dark}
    inactiveColor={Colors.notChosen}
    shifting={false}
    barStyle={{ backgroundColor: Colors.bottomBar}}
  >
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon:({color}) => (
                                                                            <Image source={require('./assets/images/home.png')} />) }}/>
    <Tab.Screen name="Wallet" component={Wallet} options={{ headerShown: false, tabBarIcon:({color}) => (
                                                                            <Image source={require('./assets/images/Wallet.png')} />) }} />
    <Tab.Screen name="Transactions" component={Transactions} options={{ headerShown: false, tabBarIcon:({color}) => (
                                                                            <Image source={require('./assets/images/arrows.png')} />) }}/>
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon:({color}) => (
                                                                            <Image source={require('./assets/images/user.png')} />) }}/>
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();
export default function App () {
  return (
  <NavigationContainer>
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={BottomStackScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
)};

