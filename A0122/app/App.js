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
import Home from './Home'
import About from './About'

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    About: {screen: About},
  });
  
const App = createAppContainer(MainNavigator);
  
export default App;