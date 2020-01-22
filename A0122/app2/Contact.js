//연락처
//4
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Contact = ({navigation}) => {

    console.log("-----------------Contact-----------------")
    console.log(navigation)

    const open = () => {
        console.log("open drawer")
        navigation.openDrawer()
    }

    return (
        <View style={style.container}>

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
        backgroundColor: 'pink'   
    }
})

export default Contact