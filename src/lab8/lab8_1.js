import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
const styles = StyleSheet.create({
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	},
});
export class Lab8_1 extends Component {
	render() {
		return (
			<View>
				<Text style={styles.red}>just red</Text>
				<Text style={styles.bigBlue}>just bigBlue</Text>
				<Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
				<Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
			</View>
		);
	}
}
AppRegistry.registerComponent('labs', () => Lab8_1);
