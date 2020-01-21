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

const ImageList = ({arr}) => {

    const list = arr.map(obj => <Image key={obj.no} source={obj.src}></Image>)

    return( /*넷플릭스 기능 / 옆으로 스크롤하는 형식 (horizontal) */
        <View>
            <ScrollView horizontal={true}> 
                {list}
            </ScrollView>
        </View>
        
    )
}

export default ImageList