import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';
import Lab3_2_1 from './lab3_2_1';

export const Lab3_2 = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Lab3_2_1 />
		</View>
	);
};
const styles = StyleSheet.create({
	button: {
		margin: 5,
		width: 150,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'grey',
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
});
