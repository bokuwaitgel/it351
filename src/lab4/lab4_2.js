import React from 'react';

import {Text, TextInput, Button, StyleSheet, View} from 'react-native';
import {backend} from '../api/backend';
import {LAB4_2_1} from './../constants/navigations';

export const Lab4_2 = ({navigation}) => {
	const [title, onChangeTitle] = React.useState('');
	const [text, onChangeText] = React.useState('test');
	return (
		<View style={styles.container}>
			<Text style={styles.Title}>Wish List</Text>
			<TextInput style={styles.input} onChangeText={onChangeTitle} value={title} />
			<TextInput multiline numberOfLines={4} onChangeText={text => onChangeText(text)} value={text} style={styles.input1} />
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button
						onPress={() => {
							backend.dataAdd(title, text);
							navigation.navigate(LAB4_2_1);
						}}
						title="submit"
						color="#FFF"
					/>
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button
						onPress={() => {
							navigation.navigate(LAB4_2_1);
						}}
						title="list"
						color="#FFF"
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'pink',
		flex: 1,
	},
	Title: {
		paddingTop: 50,
		textAlign: 'center',
		fontSize: 24,
	},
	input: {
		height: 40,
		marginHorizontal: 40,
		marginVertical: 12,
		borderWidth: 1,
		padding: 10,
	},
	input1: {
		margin: 12,
		borderWidth: 1,
		padding: 10,
		height: 150,
	},
	mp: {
		paddingTop: 5,
		paddingHorizontal: '30%',
	},
	button: {
		backgroundColor: '#841584',
	},
});
