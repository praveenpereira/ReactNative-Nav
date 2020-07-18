import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductScreen from './src/screens/ProductScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainStackNavigator from './src/navigators/MainStackNavigator';


const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MainStackScreen=({navigation})=>{
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
const Tab = () =>{
  return(
    <Tabs.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
  > 
  <Tabs.Screen name="HomeScreen" 
  component={MainStackScreen}
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="home" color={color} size={26} />
    ),
  }}
  />
      
    <Tabs.Screen name="ProfileScreen" 
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />
      <Tabs.Screen name="ProductScreen"
       component={ProductScreen}
       options={{
        tabBarLabel: 'Product',
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="material-design" color={color} size={26} />  
        ),
      }} 
      />  
    </Tabs.Navigator>
    
  )
}
 export default function App(){
  return (
    <NavigationContainer>  
      <Drawer.Navigator>
        <Drawer.Screen name="SplashScreen" component={SplashScreen}/>   
        <Drawer.Screen name="Home" component={Tab} options={{drawerLabel: 'Home',
        drawerIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/> 
        <Drawer.Screen name="ProfileScreen" component={HomeScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        />
        <Drawer.Screen name="SignIn" component={SignInScreen}/>  
        <Drawer.Screen name="SignUp" component={SignUpScreen}/>    
        
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}




