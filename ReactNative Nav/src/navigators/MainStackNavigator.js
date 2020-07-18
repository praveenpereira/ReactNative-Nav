import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export default function MainStackNavigator({navigation}){
    return(
      <MainStack.Navigator>
          <MainStack.Screen name="HomeScreen" component={HomeScreen}
          options={{
            title:'Overview',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }}
          />
          <MainStack.Screen name="ProfileScreen" component={ProfileScreen}/>
          <MainStack.Screen name="ProductScreen" component={ProductScreen}/>
          <MainStack.Screen name="DetailsScreen" component={DetailsScreen}/>
          <MainStack.Screen name="SettingsScreen" component={SettingsScreen}/>
        </MainStack.Navigator> 
    )
  }