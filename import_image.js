import React from 'react';
import{
  StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity ,StatusBar,ScrollView,Alert
  ,TouchableWithoutFeedback,ImageBackground
} from 'react-native';
import { CheckBox, Header } from 'react-native-elements';
//import ImagePicker from 'react-native-image-picker';
import { ImagePicker,Font } from 'expo';
import RNFetchBlob from 'react-native-fetch-blob';

export default class home extends React.Component {
  static navigationOptions = {
    title: 'detail',
    header: null,
  };
  constructor(props){
    super(props);
    this.state = {
      check_1 : false,
      check_2 : false,
      check_3 : false,
      image: null,
      fontLoaded: false,
      data: null,
    }
      this.next_report = this.next_report.bind(this);
      this.uploadPhoto = this.uploadPhoto.bind(this);
  }
  componentDidMount(){
    var {params} = this.props.navigation.state;
    var d = params.im;
    this.setState({
      image: d,
    });
    }
  next_report(){
    var {navigate} = this.props.navigation;
    navigate("Report")
  }
  uploadPhoto(){
    RNFetchBlob.fetch('POST', 'http://192.168.6.132/api/upload.php', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, [

    // custom content type
    { name : 'image', filename : 'image.png', type:'image/png', data: this.state.image},
  
  ]).then((resp) => {
    // ...
  }).catch((err) => {
    // ...
  })
  }
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

          <View style={styles.notic}>
            <Text style={styles.notictex}>OPTIONALs</Text>
            <View   style={styles.check}>
            <CheckBox
            title='CASE 1'
            checked={this.state.check_1}
            onPress={() => this.setState({check_1: !this.state.check_1})}
            containerStyle={{backgroundColor: 'white',borderColor:'white'}}
            />
            <CheckBox
            title='CASE 2'
            checked={this.state.check_2}
            onPress={() => this.setState({check_2: !this.state.check_2})}
            containerStyle={{backgroundColor: 'white',borderColor:'white'}}
            />
            <CheckBox
            title='CASE 3'
            checked={this.state.check_3}
            onPress={() => this.setState({check_3: !this.state.check_3})}
            containerStyle={{backgroundColor: 'white',borderColor:'white'}}
            />
            </View>

            <View style={styles.albox}>
            <TouchableOpacity style={styles.box}>
            <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.textbt} onPress={this.uploadPhoto}>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.textbt} onPress={this.next_report}>General Report</Text>
            </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    alignItems:'center',
  //  justifyContent:'center',
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
     fontSize:15,
   },
   image_frame:{
     width: '100%',
     height: 350,
     flexDirection: 'row',
     justifyContent: 'center',
     paddingTop:10,
   },
   notictex:{
     fontSize:15,
    // fontFamily: 'Didot',
     textDecorationLine:'underline',
     marginTop:10,

   },
   notic:{
     margin: 10,
   },
   box:{
  //   borderRadius:10,
     borderWidth:1,
     height:50,
     width:'99%',
     marginTop:5,
     backgroundColor: '#4d4d4d',
     borderColor:'#ffffff',
   },
   check:{
      flexDirection: 'row',
      justifyContent: 'space-around',
    //  alignItems: 'flex-start',
   },
   textbt:{
       color:'white',
       textAlign:'center',
       padding:10,
       fontFamily: 'Didot',
       fontSize:15,

   },
   albox:{
     flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems:'stretch',
    // backgroundColor:'#75a3a3',
   }


});
