import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Calculator} from './src/lab1/Calculator';
import {Lab1_2} from './src/lab1/Lab1_2';
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

const App = () => {
	return (
		<View>
			<Lab1_2 />
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
