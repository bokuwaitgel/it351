import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Lab8_3 extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.result}></View>
				<View style={styles.calculation}></View>
				<View style={styles.buttons}>
					<View style={styles.numbers}></View>
					<View style={styles.operations}></View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	result: {
		flex: 2,
		backgroundColor: 'red',
	},
	calculation: {
		flex: 2,
		backgroundColor: 'green',
	},
	buttons: {
		flex: 7,
		flexDirection: 'row',
	},
	numbers: {
		flex: 3,
		backgroundColor: 'yellow',
	},
	operations: {
		flex: 1,
		backgroundColor: 'black',
	},
});
