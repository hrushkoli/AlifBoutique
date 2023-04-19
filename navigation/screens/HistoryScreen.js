import * as React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default function HistoryScreen () {

	return(
	
		<View style={styles.container}>

			<Text style={styles.text}>
				Order History Screen
			</Text>

		</View>

	)	

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
