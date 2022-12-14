import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LabStack from './src/navigations/labStack';
import {NativeBaseProvider} from 'native-base';
const Stack = createNativeStackNavigator();

function App() {
	return (
		<NativeBaseProvider>
			<LabStack />
		</NativeBaseProvider>
	);
}

export default App;
