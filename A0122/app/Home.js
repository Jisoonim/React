//2
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {NavigationEvents} from 'react-navigation'

const Home = ({navigation}) => {

    console.log("-----------------Home-----------------")
    console.log(navigation)

    const {navigate} = navigation

    return (
        <View style={style.container}>
            <NavigationEvents onDidFocus={() => console.log("focus")}></NavigationEvents>
            <Button title="About" onPress= {() => navigate('About', {code: 'A0001'}) }></Button>
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center"   
    }
})

export default Home