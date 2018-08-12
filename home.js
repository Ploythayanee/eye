import React from 'react';
import{
  StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity ,StatusBar,ScrollView,Alert
  ,TouchableWithoutFeedback,ImageBackground
} from 'react-native';
import { CheckBox, Header } from 'react-native-elements';
//import ImagePicker from 'react-native-image-picker';
//import { ImagePicker } from 'expo';

export default class home extends React.Component {
  static navigationOptions = {
    title: 'home',
    header: null
  };
  constructor(props){
    super(props);
    this.state = {
      check_1 : false,
      check_2 : false,
      check_3 : false,
      image: null,
    }
      //this.next_image = this.next_image.bind(this);
  }
 /* next_image(){
    if(this.state.image == null){
      Alert.alert(
        'Please choose image',
        'My Alert Msg',
        [

          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      { cancelable: false }
      )
    }
    else{
    var send = this.state.image;
    var {navigate} = this.props.navigation;
    navigate("Third",{im:send})
    }
  }*/

  /*_pickImage = async () => {
    const { CAMERA_ROLL, Permissions } = Expo;
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status === 'granted') {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [6, 5],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
  else {
    throw new Error('Location permission not granted');
  }

  };*/

  render() {
      let { image } = this.state;
    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.body}>
        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        outerContainerStyles={{ backgroundColor: '#ffd11a' }}

        />
          <View style={styles.image_frame}>
          {image &&
            <Image source={{ uri: image }} style={{ width: 300, height: 350 }} />}
          </View>
          <View style={styles.third_frame}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.pick_image} >Choose Image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.pick_image} >Take a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.next}>
              <Text style={styles.pick_image} >NEXT</Text>
              </TouchableOpacity>
          </View>

        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
  },
   top:{
     marginTop: 20,
     height:50,
     backgroundColor:'#ffd11a',

   },
   top_sub:{
     borderWidth:1,
     borderColor:'white',
     height:40,
     margin:5,
   },
   text_H:{
     marginTop:10,
     textAlign: 'center',
     fontFamily: 'Al Nile',
   },
   image_frame:{
     width: '100%',
     height: 350,
     flexDirection: 'row',
     justifyContent: 'center',

   },
   third_frame:{
     width:'100%',
     height:50,
    // borderWidth:1,
   },

   button:{
     height:50,
     width: '100%',
     borderWidth:1,
     borderColor:'white',
    // borderRadius:20,
     backgroundColor:'#4d4d4d',
     flexDirection: 'column',
     justifyContent: 'space-around',
   },
   pick_image:{
     fontSize:15,
     textAlign: 'center',
     paddingTop:10,
     fontFamily: 'Al Nile',
     color:'#ffffff',

   },
   next:{
     height:50,
     width: '100%',
     borderWidth:1,
     borderColor:'white',
    // borderRadius:20,
     backgroundColor:'#5f9ea0',
     flexDirection: 'column',
     justifyContent: 'space-around',
   },



});
