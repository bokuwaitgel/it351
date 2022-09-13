import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LAB1_CALCULATOR, LAB1_2, LAB2_1, LAB2_2} from './../constants/navigations';

import {Calculator} from '../lab1/Calculator';
import {Lab1_2} from '../lab1/Lab1_2';
import {Lab2_1} from './../lab2/lab2_1';
import {Lab2_2} from './../lab2/lab2_2';

import Home from './../Home';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
const Stack = createStackNavigator();

const LabStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name={'Home'} component={Home} />
				<Stack.Screen name={LAB1_CALCULATOR} component={Calculator} />
				<Stack.Screen name={LAB1_2} component={Lab1_2} />
				<Stack.Screen name={LAB2_1} component={Lab2_1} />
				<Stack.Screen name={LAB2_2} component={Lab2_2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default LabStack;
