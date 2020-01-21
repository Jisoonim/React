import React from 'react'
import {View, Text, StyleSheet} from 'react-native'



const DisplayWeather = ({weather}) => (
	<View style={styles.header}>

        {weather == null ? //삼항연산자
		<Text style={styles.headerText}>
			Not Yet
		</Text>

        :

        <View>

        <Text style={styles.headerText}>
		    	{weather.desc}
		</Text>
        <Text style={styles.current}>
               {weather.current}
		</Text>
        <Text style={styles.min}>
              {weather.min}
		</Text>
        <Text style={styles.max}>
              {weather.max}
		</Text>

        </View>
        }
	</View>
)

const styles = StyleSheet.create({
	header: {
		marginTop: 50
	},
	headerText: {
		textAlign: 'center',
		fontSize: 72,
		color: 'rgba(175, 47, 47, 0.25)',
		fontWeight: '100'
    },
    current: {
		textAlign: 'center',
		fontSize: 30,
		color: 'red',
		fontWeight: '100'
    },
    min: {
		textAlign: 'center',
		fontSize: 20,
		color: 'blue',
		fontWeight: '100'
    },
    max: {
		textAlign: 'center',
		fontSize: 20,
		color: 'blue',
		fontWeight: '100'
	}
})

export default DisplayWeather
