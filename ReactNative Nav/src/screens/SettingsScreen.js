import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>Settings Screen</Text>
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
 