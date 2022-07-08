import { Constants } from "expo";
import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity, Image } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import getPermission from "../../utils/getPermission";
import { ImageBroweser}  from 'expo-image-picker-multiple'
import * as FileSystem from 'expo-file-system';


const options = {
  allowsEditing: true
};

export default class SelectPhotoScreen extends Component {
  state = {};

  _selectPhoto = async () => {
    const status = await getPermission(Permissions.CAMERA_ROLL);
    if (status) {
      const result = await ImagePicker.launchImageLibraryAsync(options);
     
      if (!result.cancelled) {
        
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
        //this.props.navigation.navigate("NewPost", { image: result.uri });
      }
    }
  };

  _selectMultiplePhoto = async () => {
    // const status = await getPermission(Permissions.CAMERA_ROLL);
    // if (status) {
    //   const result = await ImagePicker.launchImageLibraryAsync(options);
    //   // console.log(result)
    //   if (!result.cancelled) {
    //     this.props.navigation.navigate("NewPost", { image: result.uri });
    //   }
    // }
    //const result = await ImagePicker.launchImageLibraryAsync(allowsEditing: true)

    this.props.navigation.navigate("TakeMultiPhotos")
  };

  _next = async () => {
      
      this.props.navigation.navigate("NewPost", { image: null });
      
    }; 

  // _takePhoto = async () => {
  //   const status = await getPermission(Permissions.CAMERA);
  //   if (status) {
  //     const result = await ImagePicker.launchCameraAsync(options);
  //     if (!result.cancelled) {
  //       this.props.navigation.navigate("NewPost", { image: result.uri });
  //     }
  //   }
  // };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
            <Image style={styles.backArrow} source={require('../../assets/images/chevronleft.png')}/>
        </TouchableOpacity>
        <Text onPress={this._selectPhoto} style={styles.text}>
          Select Photo From Library
        </Text>
        <Text onPress={this._selectMultiplePhoto} style={styles.text}>
          Select Multiple Photos From Library
        </Text>
        <Text onPress={this._next} style={styles.text}>
          Select Photo From ImageURL
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  backArrow:{
    width:50,
    height:50,
    marginTop:50
  },
});

