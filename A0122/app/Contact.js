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

const Contact = ({navigation}) => {

    console.log("-----------------Contact-----------------")
    console.log(navigation)

    return (
        <View style={style.container}>
            
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