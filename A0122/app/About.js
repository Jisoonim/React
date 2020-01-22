//3
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import {NavigationEvents} from 'react-navigation'

const About = ({navigation}) => {

    console.log("-----------------About-----------------")
    console.log(navigation)

    console.log(navigation.getParam('code', '00000'))

    return (
        <View style={style.container}>
            <NavigationEvents onDidFocus={() => Alert.alert("About")}></NavigationEvents>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'yellow'   
    }
})

export default About