import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
	LAB1_CALCULATOR,
	LAB1_2,
	LAB2_1,
	LAB2_2,
	LAB2_CAL,
	LAB2_DATE_CLOCK,
	LAB2_CANVAS_DRAWER,
	LAB3_1,
	LAB3_2,
	LAB3_3,
	LAB3_4,
	LAB3_5,
	LAB4_1,
	LAB4_2,
	LAB4_3,
} from './../constants/navigations';
import Home from './../Home';
import {Calculator} from '../lab1/Calculator';
import {Lab1_2} from '../lab1/Lab1_2';
import {Lab2_1} from './../lab2/lab2_1';
import {Lab2_2} from './../lab2/lab2_2';
import {Lab2_Calculator} from '../lab2/lab2_calculator';
import {Lab2_date_clock} from '../lab2/lab2_date_clock';
import {Lab2_canvas_drawer} from '../lab2/lab2_canvas_drawer';
import {Lab3_1} from '../lab3/lab3_1';
import {Lab3_2} from '../lab3/lab3_2';
import {Lab3_3} from '../lab3/lab3_3';
import {Lab3_4} from '../lab3/lab3_4';
import {Lab3_5} from '../lab3/lab3_5';
import {Lab4_1} from '../lab4/lab4_1';
import {Lab4_2} from '../lab4/lab4_2';
import {Lab4_3} from '../lab4/lab4_3';

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
				<Stack.Screen name={LAB2_CAL} component={Lab2_Calculator} />
				<Stack.Screen name={LAB2_DATE_CLOCK} component={Lab2_date_clock} />
				<Stack.Screen name={LAB2_CANVAS_DRAWER} component={Lab2_canvas_drawer} />
				<Stack.Screen name={LAB3_1} component={Lab3_1} />
				<Stack.Screen name={LAB3_2} component={Lab3_2} />
				<Stack.Screen name={LAB3_3} component={Lab3_3} />
				<Stack.Screen name={LAB3_4} component={Lab3_4} />
				<Stack.Screen name={LAB3_5} component={Lab3_5} />
				<Stack.Screen name={LAB4_1} component={Lab4_1} />
				<Stack.Screen name={LAB4_2} component={Lab4_2} />
				<Stack.Screen name={LAB4_3} component={Lab4_3} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default LabStack;
