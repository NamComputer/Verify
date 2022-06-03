import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors } from '../../theme/color';

const DATA = [
  {
    action: "open",
    timeStamp : "March 28, 2022 at 4:30:21PM",
    user: "sonnguyen@zen-s.com",
  },
  {
    action: "open",
    timeStamp : "March 28, 2022 at 4:30:21PM",
    user: "sonnguyen@zen-s.com",
  },
  {
    action: "open",
    timeStamp : "March 28, 2022 at 4:30:21PM",
    user: "sonnguyen@zen-s.com",
  },
];

export default function UploadHistory() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.title}>History</Text>   
        </View>
        <View style={styles.body}>
        {/* const { goToScreen, goToBack } = useNavigation(); */}
  {/* console.log(getData) */}
 
          <SafeAreaViewProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
              <View style={styles.header} >
              <Ionicons
                    name="chevron-back-outline"
                    color={"#212B36"}
                    size={36}
                    onPress={() => goToBack()}
                  /> 
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
                      <Text style={styles.title}>{item.action}</Text>
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
          </SafeAreaViewProvider>
        </View>
        </View>
      </TouchableWithoutFeedback>
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
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
    flexDirection: "column",
  },

  body: {
    marginTop: 4,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: Colors.textHeader,
  },
  btn: {
    marginTop: 100,
    justifyContent: "center",
    alignSelf: "center",
  },
  displayName: {
    marginTop: 20,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: "80%",
    marginLeft: 28,
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "700",
  },
  header: {
    flexDirection: "row",
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center'
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
});
