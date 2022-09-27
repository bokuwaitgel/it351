import React from 'react';
import {Button, Text, Image, TextInput, ScrollView, StyleSheet, View} from 'react-native';

export const Calculator = ({navigation}) => {
	const [number1, setNumbet1] = React.useState(0);
	const [number2, setNumbet2] = React.useState(0);
	const [res, SetRes] = React.useState(0);
	return (
		<View>
			<TextInput style={styles.input} onChangeText={setNumbet1} value={number1} placeholder="number 1" keyboardType="numeric" />
			<TextInput style={styles.input} onChangeText={setNumbet2} value={number2} placeholder="number 2" keyboardType="numeric" />
			<View style={styles.mp}>
				<View style={styles.button} >
					<Button onPress={() => SetRes(parseInt(number1) + parseInt(number2))} title="+" color="#FFF" />
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button} >
					<Button onPress={() => SetRes(parseInt(number1) - parseInt(number2))} title="-" color="#FFF" />
				</View>
			</View>
			
			<View style={styles.mp}>
				<View style={styles.button} >
					<Button onPress={() => SetRes(parseInt(number1) / parseInt(number2))} title="/" color="#FFF" />
				</View>
			</View>

			<View style={styles.mp}>
				<View style={styles.button} >
					<Button onPress={() => SetRes(parseInt(number1) * parseInt(number2))} title="*" color="#FFF" />
				</View>
			</View>
			<Text style={styles.pt}>Result: {res}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	pt: {
		paddingLeft: 10,
		paddingTop: 5,
		fontSize: 20,
		color: 'black',
	},
	mp: {
		paddingTop: 5,
		paddingHorizontal: 10,
	},
	top: {
		display: 'flex',
		backgroundColor: 'blue',
		height: 60,
	},
	topText: {
		color: 'white',
		padding: 10,
		fontSize: 20,
		textAlign: 'left',
	},
	button: {
		backgroundColor: "#841584",
	}
});
