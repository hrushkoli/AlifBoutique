import * as React from 'react';
import {Pressable,View,StyleSheet,Text} from 'react-native';

export default function CreateNewUser ({route}) {

	return(
	
		<View style={styles.container}>
			<Text>Hi</Text>
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

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
	marginTop:5,
	marginBottom:5,
	borderRadius:10,
	width:200
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


