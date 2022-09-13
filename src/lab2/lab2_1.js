import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export const Lab2_1 = ({navigation}) => {
	return (
		<View style={styles.container}>
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F8D8A'}}>
				<View style={{alignItems: 'center'}}>
					<View style={styles.button}>
						<Button title="button" color="grey" />
					</View>
					<View style={styles.button}>
						<Button title="button" color="grey" />
					</View>
				</View>
			</View>
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#42C5C1'}}>
				<View style={{flexDirection: 'row'}}>
					<View style={styles.button}>
						<Button title="button" color="grey" />
					</View>
					<View style={styles.button}>
						<Button title="button" color="grey" />
					</View>
				</View>
			</View>
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
				<View style={{alignItems: 'center'}}>
					<View style={styles.button}>
						<Button title="button" color="grey" />
					</View>
					<View style={styles.button}>
						<Button title="button" color="grey" />
					</View>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	button: {
		margin: 5,
		width: 150,
		height: 50,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
});
