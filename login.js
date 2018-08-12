import React from 'react';
import{
  StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity ,StatusBar,ScrollView,Alert
  ,TouchableWithoutFeedback,ImageBackground
} from 'react-native';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBrEhAm4_Zmui1S4gBKDLFqASaldl_pmSs",
    authDomain: "image-6b994.firebaseapp.com",
    databaseURL: "https://image-6b994.firebaseio.com",
    projectId: "image-6b994",
    storageBucket: "image-6b994.appspot.com",
    messagingSenderId: "96186142379"
};
firebase.initializeApp(config);

export default class login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      pass:"",
    }
    this.login = this.login.bind(this);
  }
  static navigationOptions = {
    title: 'login',
    header: null

  };

  login(){
     var {navigate} = this.props.navigation;
     navigate("Second")
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./img/bg2.jpg')}>
        <View style={styles.top}>
          <Image style={styles.logo} source={require('./img/logo2.png')}/>
        </View>
        <View style={styles.login}>
          <TextInput style={styles.input} keyboardType='ascii-capable' value={this.state.email}
          onChangeText={(email)=> this.setState({email})} placeholder='    Username/Email'/>
          <TextInput style={styles.input} keyboardType='ascii-capable'
          value={this.state.pass} onChangeText={(pass)=> this.setState({pass})}
          secureTextEntry={true} placeholder='      Password'/>
          <TouchableOpacity style={styles.loginbut}>
            <Text style={styles.logintext} onPress={this.login}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.subse}>Forgot Password? </Text>

        </View>
        <View>
            <Text style={styles.subac}>Do not have an account?</Text>
            <TouchableOpacity>
            <Text style={styles.subsignup}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  top:{
    marginTop:20,
  },
  logo:{
    width: 120,
    height:120
  },
  login:{
  //  borderWidth:1,
    width: 250,
    height:250,
    marginTop:80,
  },
  input:{
    borderBottomWidth:1,
    borderRadius:20,
    height:50,
    paddingLeft:10,
    borderBottomColor: '#d4b791',
  },
  loginbut:{
  //  borderWidth:1,
    margin:10,
    height:50,
    borderRadius:20,
    backgroundColor:'#75a3a3',
    //borderColor:'#ffffff',
  },
  logintext:{
    fontSize:20,
    margin:10,
    textAlign:'center',
    color:'#ffffff'
  },
  subse:{
    textAlign:'center',
    fontStyle:'italic',
  },
  subac:{
    textAlign:'center',
    fontStyle:'italic',
    textDecorationLine:'underline',
  //  lineHeight:1,
  },
  subsignup:{
    fontSize:15,
    textAlign:'center',
    fontStyle:'italic',
  },
  fb:{
    width:50,
    height:50,
  }

});
