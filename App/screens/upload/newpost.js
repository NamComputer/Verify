import React, { useState } from 'react';
import { Image, TextInput, View, StyleSheet, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { Colors } from '../../theme/color';
import * as Yup from 'yup';
import  { Form, Formik } from 'formik'
import { Divider } from 'react-native-elements';


export default function NewPostScreen ({navigation,route}) {

    const placeholderImage = 'https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg'
    const uploadPostSchema = Yup.object({
      imageUrl: Yup.string().url('Invalid').required('A Url is required'),
      caption: Yup.string().max(10,'Caption has reached the limit')
    })
    const uploadNonImageUrlPostSchema = Yup.object({
      caption: Yup.string().max(10,'Caption has reached the limit')
    })
    const [thumbnailUrl, setThumbnailUrl] = useState(placeholderImage)
    const {image} = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>     
          <TouchableOpacity onPress={()=>navigation.pop()}>
              <Image style={styles.backArrow} source={require('../../assets/images/chevronleft.png')}/>
          </TouchableOpacity>
          <Text style={styles.headerText}>NEW POST</Text>
        </View>
        {image != null ?
        <Formik
        initialValues={{caption:'', imageURL: ''}}
        onSubmit={(value) => console.log(value)}
        validationSchema={uploadNonImageUrlPostSchema}
        validateOnMount={true}
       >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
          <>
          <View style={styles.imageCaption}>
            <Image style={styles.image} 
            source={{uri:thumbnailUrl ? thumbnailUrl : placeholderImage}}/>
          
            <TextInput placeholder='Write a caption...' 
            placeholderTextColor={Colors.hint} 
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
            />
          </View>
          <Divider width={100}  orientation='vertical' />
          {/* <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            placeholder='Enter Image URL' 
            placeholderTextColor={Colors.hint} 
            onChangeText={handleChange('imageURL')}
            onBlur={handleBlur('imageURL')}
            value={values.imageURL}
            /> */}
            {errors.caption && (
              <Text style={styles.errors}>{errors.caption}</Text>
            )} 
            <Button onPress={handleSubmit} title="Share" />
          </>
        )}
       </Formik> 
        :
       <Formik
        initialValues={{caption:'', imageURL: ''}}
        onSubmit={(value) => console.log(value)}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
       >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
          <>
          <View style={styles.imageCaption}>
            <Image style={styles.image} 
            source={{uri:thumbnailUrl ? thumbnailUrl : placeholderImage}}/>
          
            <TextInput placeholder='Write a caption...' 
            placeholderTextColor={Colors.hint} 
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
            />
          </View>
          <Divider width={100}  orientation='vertical' />
          <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            placeholder='Enter Image URL' 
            placeholderTextColor={Colors.hint} 
            onChangeText={handleChange('imageURL')}
            onBlur={handleBlur('imageURL')}
            value={values.imageURL}
            />
            {errors.imageURL && (
              <Text style={styles.errors}>{errors.imageURL}</Text>
            )} 
            <Button onPress={handleSubmit} title="Share" />
          </>
        )}
       </Formik> 
       }
       
        {/* /* <TextInput
          multiline
          style={{ flex: 1, paddingHorizontal: 26, color:Colors.dark }}
          placeholder="Add a neat description..."
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        /> */}
      </View>
    );
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
  body:{
    paddingTop: 100, 
    justifyContent:'center' 
  },
  header:{
    flex:.2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerText:{
    color:Colors.dark,
    marginRight:140,
    fontSize:20,
    fontWeight:'500'
  },
  image:{
    width:200,
    height:200,
    marginBottom:10
  },
  imageCaption:{
  flexDirection:'row',
  justifyContent:'space-between'  
  },
  errors:{
    color:Colors.red,
    fontSize:20
  },
  backArrow:{
    width:50,
    height:50,
  },
});

