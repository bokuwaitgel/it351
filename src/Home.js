import React from 'react';
import {SafeAreaView, ScrollView, Button, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {LAB1_CALCULATOR, LAB1_2, LAB2_1, LAB2_2} from './constants/navigations';
const Home = ({navigation}) => {
	return (
		<View>
			<Text style={styles.topText}>Lab 1 </Text>
			<View style={styles.mp}>
				<Button onPress={() => navigation.navigate(LAB1_CALCULATOR)} title="lab1_calculator" color="#841584" />
			</View>
			<View style={styles.mp}>
				<Button onPress={() => navigation.navigate(LAB1_2)} title="lab1-2" color="#841584" />
			</View>
			<Text style={styles.topText}>Lab 2 </Text>
			<View style={styles.mp}>
				<Button onPress={() => navigation.navigate(LAB2_1)} title="lab2-1" color="#841584" />
			</View>
			<View style={styles.mp}>
				<Button onPress={() => navigation.navigate(LAB2_2)} title="lab2-2" color="#841584" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mp: {
		paddingTop: 5,
		paddingHorizontal: 10,
	},
	topText: {
		color: 'black',
		padding: 10,
		fontSize: 20,
		textAlign: 'left',
	},
});

export default Home;
