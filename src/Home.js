import React from 'react';
import {SafeAreaView, ScrollView, Button, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { LAB1_CALCULATOR, LAB1_2, LAB2_1, LAB2_2, LAB2_CAL, LAB2_DATE_CLOCK, LAB2_CANVAS_DRAWER, LAB3_1} from './constants/navigations';
const Home = ({navigation}) => {
	return (
		<View>
			<Text style={styles.topText}>Lab 1 </Text>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB1_CALCULATOR)} title="lab1_calculator" color="#FFF" />
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB1_2)} title="lab1-2" color="#FFF" />
				</View>
			</View>
			<Text style={styles.topText}>Lab 2 </Text>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB2_1)} title="lab2-1" color="#FFF" />
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB2_2)} title="lab2-2" color="#FFF" />
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB2_CAL)} title="lab2-cal" color="#FFF" />
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB2_DATE_CLOCK)} title="lab2-date-clock" color="#FFF" />
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB2_CANVAS_DRAWER)} title="lab2-canvas-drawer" color="#FFF" />
				</View>
			</View>
			<Text style={styles.topText}>Lab 3 </Text>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button onPress={() => navigation.navigate(LAB3_1)} title="lab3-1" color="#FFF" />
				</View>
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
	button: {
		backgroundColor: "#841584",
	}
});

export default Home;
