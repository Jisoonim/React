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
import Home from './Home'
import About from './About'
import Contact from './Contact'

const HomeNav = createStackNavigator({
    Home: {screen: Home},
    About: {screen: About},
  });

  const AppTabs = createBottomTabNavigator({
    HomeNav: {screen: HomeNav},
    Contact: {screen: Contact}
  })
  
const App = createAppContainer(AppTabs);
  
export default App;