import { Constants } from "expo";
import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity, Image } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import getPermission from "../../utils/getPermission";

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
        this.props.navigation.navigate("NewPost", { image: result.uri });
      }
    }
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

