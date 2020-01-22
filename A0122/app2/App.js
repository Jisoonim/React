//1 Android Pratice
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'

import Home from './Home'
import About from './About'
import Contact from './Contact'

const drawerNavigator = createDrawerNavigator(
  {
    Home, About, Contact
  },
  {//initialRouteName = 첫화면(앱 실행시) 뭐가뜰꺼냐?
    initialRouteName: 'Home'
  }

)
  
const App = createAppContainer(drawerNavigator);
  
export default App;