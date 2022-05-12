import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('Scan')}>      
         <Image source={require('../../assets/images/camera.png')} />
        </TouchableOpacity> 
         <Text style={styles.textHeaderBar}>Verify</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/messenger.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>

      </View>
      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: .2,
    paddingHorizontal: 20,
 // flex direction giúp cho nội dung như text, icon cùng 1 line
    flexDirection: 'row',
 // alignItem giúp cho nội dung trên line đều được đi qua trung điểm của một đoạn thằng
    alignItems : "center",
 // justifyContent giúp tạo khoảng cách giữa các nội dung trong cùng 1 row
    justifyContent:"space-between"
  },
  body: {
    flex:.5,
    justifyContent:'center',
    flexDirection:'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex:.5,
    alignContent: 'center',
    alignItems: 'center',
  },
  textHeaderBar:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:100,
    marginRight:100
  }
});
