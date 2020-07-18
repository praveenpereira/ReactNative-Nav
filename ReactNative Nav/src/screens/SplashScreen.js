import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Button} from 'react-native';

export default function SplashScreen({navigation}){
    return(
      <View style={styles.container}>
      <Text style={styles.logo}>ProductApp</Text>
     
      <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}  style={styles.loginButton}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8739ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:35,
    color:"#fa0c1c",
    marginBottom:40
  },
  loginButton:{
    width:"80%",
    backgroundColor:"#fad60c",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  },
  loginBtn:{
    backgroundColor:'yellow',
  }
});

