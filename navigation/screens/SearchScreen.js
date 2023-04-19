import * as React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';

export default function SearchScreen () {
	
	var {search,setSearch} = useState();

	const updateSearch = (s) => {
		search = s
  };

	return(
	
		<View style={styles.container}>

			<SearchBar
				placeholder="Type Here..."
				onChangeText={updateSearch}
				value={search}
			  />

		</View>

	)	

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	flexDirection:'column',
  },
}); 
