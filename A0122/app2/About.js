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
import { TouchableOpacity } from 'react-native-gesture-handler';

const About = ({navigation}) => {

    console.log("-----------------About-----------------")
    console.log(navigation)

    console.log(navigation.getParam('code', '00000'))

    const open = () => {
        console.log("open drawer")
        navigation.openDrawer()
    }

    return (
        <View style={style.container}>
            {/* <NavigationEvents onDidFocus={() => Alert.alert("About")}></NavigationEvents> */}

            <View style={style.header}>
                <TouchableOpacity >
                <Text onPress={open}>MENU</Text>
                </TouchableOpacity>
            </View>
            
           

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