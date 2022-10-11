import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export const First = ({navigation}) => {
	return (
		<View style={styles.container}>
			<View style={styles.test}>
				<Text>First Screen</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	test: {
		backgroundColor: 'green',
	},
});
