import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { Colors } from '../../theme/color';
import { format } from 'date-fns';

const DATA = [
  {
    status: "Succeeded",
    timeStamp : "March 28, 2022",
    
  },
  {
    status: "Failed",
    timeStamp : "March 28, 2022",
    
  },
  {
    status: "Succeeded",
    timeStamp : "March 28, 2022",
  },
];

export default function UploadHistory() {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          
          {/* const { goToScreen, goToBack } = useNavigation(); */}
    {/* console.log(getData) */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                <View style={styles.header} >
                {/* <Ionicons
                      name="chevron-back-outline"
                      color={"#212B36"}
                      size={36}
                      onPress={() => goToBack()}
                    />  */}
                </View>
                <Text style={styles.headerTitle}>History</Text>
                <View>
                  <Text style={styles.subTitle}>{format(new Date(),'MMM do, yyyy')}</Text>
                </View>
                <View style={styles.body}>
                <Text style={styles.text}>
                    <FlatList
                    data={DATA}
                    renderItem={({item}) =>(
                      <View style={styles.item}>
                        <Text style={styles.title}>{item.status}</Text>
                        <Text style={styles.title}>{item.timeStamp}</Text>
                      </View>
                    )}
                    //keyExtractor={(item) => item.id}
                    // extraData={selectedId}
                    />
                </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
        </View>
      
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "column",
  },
  headerTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 40,
    fontWeight: "700",
    color: Colors.dark,
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  },
  subTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 15,
    color: Colors.dark,
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  },
  btn: {
    marginTop: 100,
    justifyContent: "center",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems:'center'
  },
  button: {
    alignSelf: "center",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
    fontFamily: "PoppinsBold",
    padding: 10,
    margin:280,
    width:"80%",
    height:"5%",
    borderRadius:10
  },
  body: {
    marginTop: 4,
    paddingLeft:20,
    flex:1
  },
  text:{
    color: Colors.dark
  },
  item: {
    borderBottomWidth:5,
    borderColor: "#24cbc2",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent:"space-between",
    flexDirection:'row'
  },
  title: {
    color:Colors.dark,
    fontSize: 15,
  },
});
