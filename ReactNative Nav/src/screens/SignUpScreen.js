import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Button} from 'react-native';
//import TextInput from './components/TextInput';
//import TextButton from './components/TextButton';
//import Button from './components/Button';



export default function SignUpScreen({navigation}){
    const [state,setState] = React.useState({email:'',password:''});
    return(
        <View style={styles.container}>
        <Text style={styles.logo}>ProductApp</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({password:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.check}>Forgot Password?</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={styles.loginButton}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        
       
        <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}} >
          <Text style={styles.loginText}>Login</Text>
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
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    check:{
      color:"white",
      fontSize:11
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
    }
  });