//왼쪽 메뉴버튼 터치시 화면이 출력되게하기
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
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

    console.log("-----------------Home-----------------")
    console.log(navigation)
    

    const {navigate} = navigation

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

            <View style={style.content}>
            <Button title="About" onPress= {() => navigate('About', {code: 'A0001'}) }></Button>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red',
        
    },

    header: { //아이콘 누르면 메뉴버튼나오게 설계
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: "flex-start",
        alignItems: "flex-start"   
        
    },

    content: {
        flex: 10,
        backgroundColor: 'red',
        

    },
   
})

export default Home