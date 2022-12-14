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
	LAB4_2_1,
	LAB4_2_2,
	LAB4_3,
	LAB5_1,
	LAB5_2,
	LAB5_3,
	LAB5_4,
	LAB6_1,
	LAB6_2,
	LAB7_1,
	LAB7_2,
	LAB7_3,
	LAB8_1,
	LAB8_2,
	LAB8_3,
	LAB8_4,
	LAB9_1,
	LAB9_2,
	LAB9_3,
	LAB9_4,
	LAB9_5,
	LAB9_6,
	LAB10_1,
	LAB10_2,
	LAB10_3,
	LAB10_4,
	LAB10_5,
	LAB10_6,
	LAB11_1,
	LAB11_2,
	LAB11_3,
	LAB11_4,
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
import {Lab4_2_1} from '../lab4/lab4_2_1';
import {Lab4_2_2} from '../lab4/lab4_2_2';
import {Lab4_3} from '../lab4/lab4_3';
import {Lab5_1} from '../lab5/lab5_1';
import {Lab5_2} from '../lab5/lab5_2';
import {Lab5_3} from '../lab5/lab5_3';
import {Lab5_4} from '../lab5/lab5_4';
import {Lab6_1} from '../lab6/Lab6_1';
import {Lab6_2} from '../lab6/Lab6_2';
import {Lab7_1} from '../lab7/lab7_1';
import {Lab7_2} from '../lab7/lab7_2';
import {Lab7_3} from '../lab7/lab7_3';
import {Lab8_1} from '../lab8/lab8_1';
import {Lab8_2} from '../lab8/lab8_2';
import {Lab8_3} from '../lab8/lab8_3';
import {Lab8_4} from '../lab8/lab8_4';
import {Lab9_1} from '../lab9/lab9_1';
import {Lab9_2} from '../lab9/lab9_2';
import {Lab9_3} from '../lab9/lab9_3';
import {Lab9_4} from '../lab9/lab9_4';
import {Lab9_5} from '../lab9/lab9_5';
import {Lab9_6} from '../lab9/lab9_6';
import {Lab10_1} from '../lab10/lab10_1';
import {Lab10_2} from '../lab10/lab10_2';
import {Lab10_3} from '../lab10/lab10_3';
import {Lab10_4} from '../lab10/lab10_4';
import {Lab10_5} from '../lab10/lab10_5';
import {Lab10_6} from '../lab10/lab10_6';
import {Lab11_1} from '../lab11/lab11_1';
import {Lab11_2} from '../lab11/lab11_2';
import {Lab11_3} from '../lab11/lab11_3';
import {Lab11_4} from '../lab11/lab11_4';
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
				<Stack.Screen name={LAB4_2_1} component={Lab4_2_1} />
				<Stack.Screen name={LAB4_2_2} component={Lab4_2_2} />
				<Stack.Screen name={LAB4_3} component={Lab4_3} />
				<Stack.Screen name={LAB5_1} component={Lab5_1} />
				<Stack.Screen name={LAB5_2} component={Lab5_2} />
				<Stack.Screen name={LAB5_3} component={Lab5_3} />
				<Stack.Screen name={LAB5_4} component={Lab5_4} />
				<Stack.Screen name={LAB6_1} component={Lab6_1} />
				<Stack.Screen name={LAB6_2} component={Lab6_2} />
				<Stack.Screen name={LAB7_1} component={Lab7_1} />
				<Stack.Screen name={LAB7_2} component={Lab7_2} />
				<Stack.Screen name={LAB7_3} component={Lab7_3} />
				<Stack.Screen name={LAB8_1} component={Lab8_1} />
				<Stack.Screen name={LAB8_2} component={Lab8_2} />
				<Stack.Screen name={LAB8_3} component={Lab8_3} />
				<Stack.Screen name={LAB8_4} component={Lab8_4} />
				<Stack.Screen name={LAB9_1} component={Lab9_1} />
				<Stack.Screen name={LAB9_2} component={Lab9_2} />
				<Stack.Screen name={LAB9_3} component={Lab9_3} />
				<Stack.Screen name={LAB9_4} component={Lab9_4} />
				<Stack.Screen name={LAB9_5} component={Lab9_5} />
				<Stack.Screen name={LAB9_6} component={Lab9_6} />
				<Stack.Screen name={LAB10_1} component={Lab10_1} />
				<Stack.Screen name={LAB10_2} component={Lab10_2} />
				<Stack.Screen name={LAB10_3} component={Lab10_3} />
				<Stack.Screen name={LAB10_4} component={Lab10_4} />
				<Stack.Screen name={LAB10_5} component={Lab10_5} />
				<Stack.Screen name={LAB10_6} component={Lab10_6} />
				<Stack.Screen name={LAB11_1} component={Lab11_1} />
				<Stack.Screen name={LAB11_2} component={Lab11_2} />
				<Stack.Screen name={LAB11_3} component={Lab11_3} />
				<Stack.Screen name={LAB11_4} component={Lab11_4} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default LabStack;
