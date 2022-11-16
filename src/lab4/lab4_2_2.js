import React from 'react';

import {Text, TextInput, Button, StyleSheet, View, Alert} from 'react-native';
import {backend} from '../api/backend';
import {LAB4_2} from './../constants/navigations';

export const Lab4_2_2 = ({navigation, route}) => {
	const data = route?.params.item;
	return (
		<View style={styles.container}>
			<Text>{!data.name ? 'null' : data.name} </Text>
			<Text>{data.description}</Text>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button
						onPress={() => {
							backend.delete(data.id).then(a => {
								console.log(a.protocol41);
								if (a.protocol41 === true) {
									Alert.alert('Delete detail', 'succesful');
									navigation.navigate(LAB4_2);
								} else {
									Alert.alert('Delete detail', 'failed');
									navigation.navigate(LAB4_2);
								}
							});
						}}
						title="delete"
						color="#FFF"
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mp: {
		paddingTop: 5,
		paddingHorizontal: '30%',
	},
	button: {
		backgroundColor: '#841584',
	},
});
