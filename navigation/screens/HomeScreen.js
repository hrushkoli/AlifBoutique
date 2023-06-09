import * as React from 'react';
import {Pressable,View,StyleSheet,Text} from 'react-native';
import {CreateNewUser} from './activities/CreateNewUser'

export default function HomeScreen ({navigation}) {

	return(
	
		<View style={styles.container}>

				<Pressable style={styles.button} onPress=
					{() => navigation.navigate('CreateNewUser')}
			> 
				  <Text style={styles.text}>Create New User</Text>
				</Pressable>			
		
				<Pressable style={styles.button}> 
				  <Text style={styles.text}>Existing User</Text>
				</Pressable>			


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


