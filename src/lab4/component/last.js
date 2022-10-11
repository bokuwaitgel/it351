import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export const Last = ({navigation}) => {
	return (
		<View style={styles.container}>
			<View style={styles.test}>
				<Text>Second Screen</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	test: {
		backgroundColor: 'grey',
	},
});
