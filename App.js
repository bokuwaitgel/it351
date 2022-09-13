import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LabStack from './src/navigations/labStack';

const Stack = createNativeStackNavigator();

function App() {
	return <LabStack />;
}

export default App;
