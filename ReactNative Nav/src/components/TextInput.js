import React,{Component} from 'react';
import {StyleSheet,TextInput} from 'react-native';


export default function TextInput(){
    return(
        <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
           />
           )
}
const styles = StyleSheet.create({ 
    inputText:{
      height:50,
      color:"white"
    },
    
  });