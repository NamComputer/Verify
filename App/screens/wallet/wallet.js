import { StyleSheet, Text, View, Image, Alert, TouchableOpacity,ScrollView } from 'react-native';
import { Colors } from '../../theme/color';
import { USER } from '../../data/users';
import { RectangleButton } from '../../components/RectangleButton';
import { TRANSACTIONS } from '../../data/transactions';
import Transactions from '../../components/TransactionsList';


export default function Wallet() {
  return (
    <View style = {styles.container}>
      <View style={styles.header}>
        <View style={styles.leftPart}>
          <Text style={styles.textHeader}>Dashboard</Text>
          <Text style={styles.userName}>Hi, {USER[0].user}!</Text>  
          <Text style={styles.balance}>Total Balance</Text>
          <Text style={styles.balanceValue}>$124.57</Text>
        </View>
        <View style={styles.rightPart}>
          <Image style={styles.imageProfile} source={{uri:USER[0].image}} /> 
          <TouchableOpacity onPress={()=>Alert.alert('You pressed notification')}>
            <Image source={require('../../assets/images/notifications.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}> 
        <RectangleButton title={'🔼 Send Money'} onpress={() => Alert.alert('Send Money')} buttonColor={Colors.sendMoneyButton} txtColor={Colors.dark} recWidth={160} recBorderColor={Colors.sendMoneyButton}/>
        <RectangleButton title={'🔽 Withdraw'} onpress={() => Alert.alert('Withdraw')} buttonColor={Colors.bannerBackGround} txtColor={Colors.white} recWidth={160} recBorderColor={Colors.bannerBackGround}/>
      </View>
      <View style={styles.footer}>
        {TRANSACTIONS.length < 1 ? 
        <View style={styles.containerNoTransactions}>
          <Image source={require('../../assets/images/empty_illustration.png')}/>
          <Text style={styles.noTransactions}>There's no transactions till now! </Text>
        </View>  
          :
        <ScrollView>
          {TRANSACTIONS.map((transactions,index)=>(
              <Transactions transactions={transactions} key={index}/>
          ))}
        </ScrollView>}
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
    flex: .5,
    flexDirection:'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.bannerBackGround,
    width:'100%'
  },
  body: {
    flex:.1,
    justifyContent:'center',
    flexDirection:'row',
    alignContent: 'center',
    alignItems: 'center',
    marginTop:20
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
    marginRight:20,
    marginBottom:80
  },
  textHeader:{
    color:Colors.white,
    fontWeight:'500',
    fontSize:20
  },
  subTextHeader:{
    color:Colors.dark
  },
  leftPart:{
    marginLeft:20,
    marginTop:40
  },
  rightPart:{
    marginTop:40,
    flexDirection:'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  userName:{
    marginTop:50,
    fontWeight:'200',
    color:Colors.white,
    fontSize:16
  },
  balance:{
    color:Colors.white,
    fontSize: 30,
    fontWeight:'500'
  },
  balanceValue:{
    color:Colors.white,
    fontSize: 40,
    fontWeight:'600' 
  },
  noTransactions:{
    color:Colors.dark,
    fontSize:20,
  },
  containerNoTransactions:{
    marginTop:60,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
});
