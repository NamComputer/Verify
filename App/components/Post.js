import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import { Colors } from '../theme/color';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const postFooterIcons = [
  {
    name:'Like',
    imageURL:'https://img.icons8.com/fluency-systems-regular/48/000000/like--v1.png',
    likedImageURL:'https://img.icons8.com/tiny-color/48/000000/experimental-like-tiny-color.png'
  },
  {
    name:'Comment',
    imageURL:'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/48/000000/external-comment-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png',
  },
  {
    name:'Share',
    imageURL:'https://img.icons8.com/ios/48/000000/paper-plane.png',
  },
  {
    name:'Save',
    imageURL:'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/48/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png'
  }
]

const Post = ({post}) => {
  return (
    <View style={styles.container}>
       <Divider width={100} orientation='vertical' />
       <PostHeader post={post} />
       <PostImage post={post} />
       <PostFooter />
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

const PostFooter = () =>{
  return(
    <View style={styles.postFooter}>
      <View style={styles.leftPostFooter}>
        <Icon 
          imgStyle={styles.footerIcon} imgURL={postFooterIcons[0].imageURL}
        />
        <Icon 
          imgStyle={styles.footerIcon} imgURL={postFooterIcons[1].imageURL}
        />
        <Icon 
          imgStyle={styles.footerIcon} imgURL={postFooterIcons[2].imageURL}
        />
      </View>
      <View style={styles.rightPostFooter}>
        <Icon 
          imgStyle={styles.footerIcon} imgURL={postFooterIcons[3].imageURL}
        />
      </View>
    </View>
  )
}

const Icon = ({imgStyle,imgURL}) => {
  return(
  <TouchableOpacity>
    <Image style={imgStyle} source={{uri:imgURL}}/>
  </TouchableOpacity>
)}

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    height: 50,
  },
  imagePost:{
    resizeMode:'cover',
    height: 315,
    width: '100%',
  },
  nameProfile:{
    color:Colors.dark,
    marginLeft: 5,
    fontWeight:'700',
  },
  dot:{
    fontWeight:'700',
    marginLeft: windowWidth/1.4
  },
  footerIcon:{
    width:33,
    height:33,
    marginLeft:10,
    marginTop:10
  },
  postFooter:{
    flexDirection:'row',
    // justifyContent:'space-between'
  },
  leftPostFooter:{
    flexDirection:'row',
  },
  rightPostFooter:{
    marginRight:10,
    flex:1,
    alignItems:'flex-end'
  }
})
