import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';
import {First} from './component/first';
import {Last} from './component/last';

export const Lab4_1 = ({navigation}) => {
	return (
		<View style={styles.container}>
			<First />
			<Last />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
