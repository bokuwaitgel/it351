import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LAB1_CALCULATOR, LAB1_2} from './../constants/navigations';

import {Calculator} from '../lab1/Calculator';
import {Lab1_2} from '../lab1/Lab1_2';
const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const LabStack = () => {
	return (
		<Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid, headerShown: false}}>
			<Stack.Screen name={LAB1_CALCULATOR} component={Calculator} />
			<Stack.Screen name={LAB1_2} component={Lab1_2} />
		</Stack.Navigator>
	);
};

export default LabStack;
