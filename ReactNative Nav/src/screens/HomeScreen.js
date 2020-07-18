import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text></Text>
            <Button title="Profile" onPress={()=>{navigation.navigate('ProfileScreen')}}></Button>
            <Button title="Product" onPress={()=>{navigation.navigate('ProductScreen')}}></Button>
            <Button title="Details" onPress={()=>{navigation.navigate('DetailsScreen')}}></Button>
            <Button title="Settings" onPress={()=>{navigation.navigate('SettingsScreen')}}></Button>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 