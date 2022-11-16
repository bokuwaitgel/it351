import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export class Lab8_4 extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.result}>
					<Text style={styles.resultText}>11*11</Text>
				</View>
				<View style={styles.calculation}>
					<Text style={styles.resultText}>121</Text>
				</View>
				<View style={styles.buttons}>
					<View style={styles.numbers}>
						<View style={styles.row}>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
						</View>
						<View style={styles.row}>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
						</View>
						<View style={styles.row}>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
						</View>
						<View style={styles.row}>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
						</View>
					</View>
					<View style={styles.operations}>
						<View style={styles.col}>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
							<View style={styles.button}>
								<Button onPress={() => console.log('test')} title="0" color="#FFF" />
							</View>
						</View>
					</View>
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
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		flex: 2,
		backgroundColor: 'red',
	},
	calculation: {
		justifyContent: 'space-around',
		alignItems: 'flex-end',
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
	resultText: {
		fontSize: 24,
		color: 'white',
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'flex-end',
	},
	col: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#841584',
	},
});
