import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export const Lab3_1 = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>test</Text>
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
		backgroundColor: 'grey'
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
});
