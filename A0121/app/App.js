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
import Heading from './Heading';
import Button from './Button';

const App = () => {

    const [run,setRun] = useState(false)

    const changeRun = () => {
        setRun(!run)
        console.log("RUN: " + run)
    }


    async function getWeather() {
        try {
            let response = await fetch('http://192.168.0.13:8080/weather?code=1111')
            let responseJson = await response.json()
            return responseJson
        }catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("use effect................")
        getWeather().then(result => {
            console.log(result)
        })
    },[run])

    //const imgObj = require("../assets/iu.png")
    //const imgObj2 = {uri: 'http://static.hubzum.zumst.com/hubzum/2018/11/09/11/a7768e0f9f2c4fcb960c5701a079f314.jpg'}

    return (
        <View style = {style.container}>
            {/* <Image source={imgObj}></Image>
            <Image style={style.box} source={imgObj2}></Image> */}
            <Heading title={"Today's Weather"}></Heading>
            <Button submitTodo={changeRun} buttonText="GET DATA"></Button>
            <Heading title={"Today's Weather"}></Heading>

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