import React,{Component} from 'react';
import {StyleSheet,Button} from 'react-native';


export default function Button(){
    return(
        <Button>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </Button>     
        )
}
const styles = StyleSheet.create({
    
      
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
    
  });