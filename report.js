import React from 'react';
import{
  StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity ,StatusBar,ScrollView,Alert
  ,TouchableWithoutFeedback,ImageBackground
} from 'react-native';
import * as firebase from 'firebase';

export default class login extends React.Component {
  static navigationOptions = {
    title: 'report',
    header: null

  };

  constructor(props){
    super(props);
    console.ignoredYellowBox = [ 'Setting a timer' ];
    this.state = {
      detail: [],

    }
    this.database = firebase.database();
    //this.storage = firebase.storage();
    //this.paRef = this.database.ref('Patient');
    //this.listeningForReserve = this.listeningForReserve.bind(this);
    this.pinRef = this.database.ref('Patient');
    //this.imageRef = this.storage.ref('image');
  }
  listeningForPin(){
   this.pinRef.on('value',(snapshot)=>
   {
     console.log("Pin Add", snapshot.val());
     this.setState({detail: snapshot.val()});
   })

 }
  componentDidMount(){
	  console.log('aa');
  //  setTimeout(() => { this.setState({ test: !this.state.test }) }, 5000);
    this.listeningForPin();
  }

  render() {
    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.body}>
        {this.state.detail.map((obj,i)=>
            <View key={i} style={styles.frame}>
              <View style={styles.second}>
                <Image  source={{ uri: obj.URL }}
                   style={{ width: 200, height: 200,  }}
                />

              </View>

              <Text style={styles.topic}>PERSONAL DETAILs</Text>
              <View style={styles.third}>
                <View style={styles.left}>
                  <Text style={styles.tx}>NAME: </Text>
                  <Text style={styles.tx}>Gender: </Text>
                  <Text style={styles.tx}>Age: </Text>
                  <Text style={styles.tx}>Blood Group: </Text>
                </View>
              <View style={styles.right}>
                  <Text style={styles.tx}>{obj.Name} </Text>
                  <Text style={styles.tx}>{obj.Gender} </Text>
                  <Text style={styles.tx}>{obj.Age} </Text>
                  <Text style={styles.tx}>{obj.Blood} </Text>
              </View>
              </View>
                <Text style={styles.topic}>RESULT</Text>
                <View style={styles.four}>
                  <Text style={styles.tx}>{obj.Result} </Text>

                </View>
                <TouchableOpacity style={styles.but}>
                  <Text style={styles.logintext} onPress={this.login}></Text>
                </TouchableOpacity>
            </View>


        )}
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
    fontFamily: 'Futura',
    fontSize:20,
  },
 second:{
   //borderWidth:1,
   height:200,
   flexDirection: 'row',
   justifyContent: 'center',
 },
 third:{
  // borderWidth:1,
   height:200,
   flexDirection: 'row',
   justifyContent: 'space-around',
   backgroundColor:'#f2f2f2',
   opacity:0.5,
   margin:10,
 },
 four:{
  // borderWidth:1,
   height:200,
   backgroundColor:'#f2f2f2',
   opacity:0.5,
 },
 topic:{
   marginLeft:10,
   fontSize:15,
   padding:10,
  // borderWidth:1,
   backgroundColor:'#ffbf00',
 },
 tx:{
   marginLeft:10,
   fontSize:15,

   padding:10,
 },
 list:{
   margin:10,
   //borderWidth:1,
   backgroundColor:'#f2f2f2',
   opacity:0.5,
   height:150,
 },
 but:{
 //  borderWidth:1,
   margin:10,
   height:50,
   borderRadius:20,
   backgroundColor:'#75a3a3',
   //borderColor:'#ffffff',
 },
});
