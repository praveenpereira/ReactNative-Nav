import React, {Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


export default function ProductScreen(){
    return(
        <View style={styles.container}>
            <Text>product screen </Text>
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
 