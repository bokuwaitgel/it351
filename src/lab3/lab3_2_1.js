import React, {Component} from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export default class Lab3_2_1 extends Component {
	constructor() {
		super();
		console.log('Constructor Called.');
	}

	componentDidMount() {
		console.log('componentDidMount called.');
	}

	shouldComponentUpdate(nextProp, nextState) {
		console.log('shouldComponentUpdate called.');
	}

	componentDidUpdate(prevProp, prevState) {
		console.log('componentDidUpdate called.');
	}

	componentDidCatch(error, info) {
		console.log('componentDidCatch called.');
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>test</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
});
