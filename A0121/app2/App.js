import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import ImageList from './ImageList'

const App = () => {

    const arr = [
        {no: 1, src: require('../assets/iu.png') },
        {no: 2, src: require('../assets/iu2.jpg') },
        {no: 3, src: require('../assets/marvel.jpg') },
        {no: 4, src: require('../assets/marvel2.jpg') }
    ]
    return (
        <View style={style.container}>
            <Text>App2</Text>
            <ImageList arr={arr}></ImageList>
        </View>
    )

}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
    ,
    box: {
        width: 100,
        height: 100
    }
})

export default App