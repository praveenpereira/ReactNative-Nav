import React,{Component} from 'react';
import {StyleSheet} from 'react-native';


export default function TextButton(){
    return(
        <TextButton>
        <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      </TextButton> 
    )
}
const styles = StyleSheet.create({   
    loginText:{
        color:"black"
      },
    
  });