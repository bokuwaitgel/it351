import React from 'react';
import {Button, StyleSheet, View, TextInput} from 'react-native';
import {backend} from '../api/backend';

export const Lab5_1 = ({navigation}) => {
	const [text, onChangeText] = React.useState('');
	return (
		<View style={styles.container}>
			<TextInput onChangeText={text => onChangeText(text)} value={text} style={styles.input} />
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button
						onPress={() => {
							backend.insertName(text).then(a => {
								console.log(a);
								alert('Success');
								onChangeText('');
							});
						}}
						title="submit"
						color="#FFF"
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
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
	mp: {
		paddingTop: 5,
		paddingHorizontal: '30%',
	},
	button: {
		backgroundColor: '#841584',
	},
});
