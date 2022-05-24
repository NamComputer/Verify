import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import { Colors } from '../theme/color';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const postFooterIcons = [
  {
    name:'Like',
    imageURL:''
  }
]

const Post = ({post}) => {
  return (
    <View style={styles.container}>
       <Divider width={100} orientation='vertical' />
       <PostHeader post={post} />
       <PostImage post={post} />
    </View>
  );
}

const PostHeader = ({post}) => {
  return(
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Image style={styles.imageProfile} source={{uri:post.profile_picture}} />
      <Text style={styles.nameProfile}>{post.user}</Text>
    </View>

    <TouchableOpacity>
      <Text style={styles.dot}>
      ...
      </Text>
    </TouchableOpacity>
  </View> 
  
  )
}

const PostImage = ({post}) => {
  return(
  <View>
    <Image style={styles.imagePost} source={{uri:post.imageURL}}/>
  </View>

  
  )
}

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    marginBottom:30
  },
  postContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
    alignItems:'center'
  },
  postHeader:{
    flexDirection:'row',
    alignItems:'center'
  },
  imageProfile:{
    width: 50, 
    height: 50
  },
  imagePost:{
    resizeMode:'cover',
    height: 315,
    width: 350
  },
  nameProfile:{
    color:Colors.dark,
    marginLeft: 5,
    fontWeight:'700',
  },
  dot:{
    fontWeight:'700',
    marginLeft: windowWidth/1.4
  }
})
