// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { RectangleButton } from '../../components/RectangleButton';
// import { Colors } from '../../theme/color';

// export default function Scan({navigation}) {
//   return (
//     <View style={styles.container}>
//         <View style={styles.header}>
//             <Text style={styles.textHeader}>Scan CV</Text>
//         </View>
//         <View style={styles.body}>

//         </View>
//         <View style={styles.footer}>
//             <RectangleButton 
//                 title={'Scan'}
//                 onpress={() =>
//                   navigation.navigate('Home')
//                 }
//                 buttonColor={Colors.textHeader}
//                 txtColor={Colors.white}
//             />
//             <RectangleButton 
//                 title={'History'}
//                 onpress={() =>
//                   navigation.navigate('Home')
//                 }
//                 buttonColor={Colors.secondButtonColor}
//                 txtColor={Colors.dark}
//             />
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     flex: .1,
//     flexDirection:'row',
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   textHeader:{
//     fontSize:36,
//     fontWeight:'bold',
//     color:Colors.textHeader,
//   },
//   body: {
//     flex:.3,
//     justifyContent:'center',
//     flexDirection:'column',
//     alignContent: 'center',
//     alignItems: 'center',
//   },
//   footer: {
//     flex:.2,
//     flexDirection:'column',
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent:'space-evenly',

//   },
// });


import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
