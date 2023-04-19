import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import SearchScreen from './screens/SearchScreen';
import CreateNewUser from './screens/activities/CreateNewUser'

const homeName = 'Home ';
const searchName = 'Search ';
const historyName = 'History';
const createNewUserName = 'Create New User';

const Tab = createBottomTabNavigator();

const Stack =  createStackNavigator() ;

const HomeNavigation = () => {

	return(
			<Stack.Navigator initialRouteName={homeName} >    // contains all child component screens within a stack. 
				   <Stack.Screen name={homeName} component={HomeScreen}/>
				   <Stack.Screen name={createNewUserName} component={CreateNewUser}/>
				   <Stack.Screen name={searchName} component={SearchScreen}/>
				   <Stack.Screen name={historyName} component={HistoryScreen}/>
			</Stack.Navigator>
	)

}

export default function MainContainer() {
	return(
		<NavigationContainer>
			<Tab.Navigator
			initialRouteName={homeName}
			screenOptions= {({route}) => ({
				
				tabBarIcon: ({focused,size}) => {
					let iconName;
					let rn = route.name;

					if(rn === homeName){
						iconName = focused ? 'home' : 'home-outline';
					} else if (rn === searchName){
						iconName = focused ? 'search' : 'search-outline';
					} else if (rn === historyName){
						iconName = focused ? 'list' : 'list-outline';
					}
					return <Ionicons name={iconName} size={size} />
				},
				tabBarStyle: {
					padding:10,
					margin:10,
					height:70,
					borderRadius:10,
				},
				tabBarActiveTintColor:"black",
				tabBarItemStyle:{
					margin:10,
					padding:0
				},
			})}
			
			>
					
				
			<Tab.Screen name={homeName} component={HomeScreen}/>
			<Tab.Screen name={searchName} component={SearchScreen}/>
			<Tab.Screen name={historyName} component={HistoryScreen}/>

			</Tab.Navigator>
		</NavigationContainer>
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
