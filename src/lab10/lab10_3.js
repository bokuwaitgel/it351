import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
export const Lab10_3 = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Text style={styles.text}>Button</Text>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	text: {
		borderWidth: 1,
		padding: 50,
		color: 'blue',
		borderColor: 'black',
		backgroundColor: 'red',
	},
});
