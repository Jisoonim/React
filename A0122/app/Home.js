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

const Home = ({navigation}) => {

    console.log("-----------------Home-----------------")
    console.log(navigation)

    const {navigate} = navigation

    return (
        <View style={style.container}>
            <Button title="About" onPress= {() => navigate('About') }></Button>
            
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