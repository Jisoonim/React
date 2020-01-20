
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TextInput
} from 'react-native';

const Test1 = () => {

    const [text, setText] = useState('')

    const handlePress = () => {
        Alert.alert("CLICK", "실행하시겠습니까?")
    }

    const handleChange = (text) => {
        console.log(text)
    }

    return (

        <View style={style.container}>
            {/* <Text style={style.title}>Test1 Component</Text> */}
            <View style={style.header}></View>
            <View style={style.center}>
                <TextInput placeholder="INPUT" onChangeText={handleChange} value={text}></TextInput>
                <Button title="CLICK" onPress={handlePress}></Button>
            </View>
            <View style={style.footer}></View>

        </View>
    )
}

        const style = StyleSheet.create({

            container: {
                flex: 1,
                backgroundColor: 'skyblue'

            }
            ,

            header: {
                flex: 1,
                backgroundColor: 'green'

            }
            ,

            center: {
            flex: 1,
            backgroundColor: 'grey'

            }
            ,

            footer: {
            flex: 1,
            backgroundColor: 'red'

            }
            ,
            title: {
                fontSize: 40,
                backgroundColor: 'green'
            }
            })

export default Test1