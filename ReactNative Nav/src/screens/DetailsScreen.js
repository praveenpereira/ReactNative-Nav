import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


export default function DetailsScreen(){
    return(
        <View style={styles.container}>
            <Text>Details Screen</Text>
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
 