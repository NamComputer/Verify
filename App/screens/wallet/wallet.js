import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Colors } from '../../theme/color';
import { USER } from '../../data/users';
import { RectangleButton } from '../../components/RectangleButton';

export default function Wallet() {
  return (
    <View style = {styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Dashboard</Text>
        <Image style={styles.imageProfile} source={{uri:USER[0].image}} /> 
        <View style={styles.subTextHeader}>
          <Text>Hi, {USER[0].user}!</Text>  
        </View>   
      </View>
      <View style={styles.body}>
        <RectangleButton title={'Send Money'} onpress={() => Alert.alert('Sent Money')} buttonColor={Colors.sendMoneyButton} txtColor={Colors.white} />
        <RectangleButton title={'Withdraw'} onpress={() => Alert.alert('Withdraw')} buttonColor={Colors.sendMoneyButton} txtColor={Colors.white} />
      </View>
      <View style={styles.footer}>
        <Text>Open up App.tsx to start working on your app 1!</Text>
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
    flex: .4,
    flexDirection:'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.bannerBackGround,
    width:'100%'

  },
  body: {
    flex:.5,
    justifyContent:'center',
    flexDirection:'row',
    alignContent: 'center',
    alignItems: 'center',
    padding:100

  },
  footer: {
    flex:.5,
    alignContent: 'center',
    alignItems: 'center',
  },
  imageProfile:{
    borderRadius:50,
    width: 50, 
    height: 50,
  },
  textHeader:{
    color:Colors.white,
    fontWeight:'500'
  },
  subTextHeader:{
    justifyContent:'center',
    flexDirection:'column',
    alignContent: 'center',
    alignItems: 'center',
  }
});
