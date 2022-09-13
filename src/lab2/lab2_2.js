import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export const Lab2_2 = ({navigation}) => {
	return (
		<View style={styles.container}>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{flex: 1, backgroundColor: 'red'}} />
				<View style={{flex: 1, flexDirection: 'column'}}>
					<View style={{flex: 1, backgroundColor: 'yellow'}} />
					<View style={{flex: 1, backgroundColor: 'black'}} />
				</View>
			</View>
			<View style={{flex: 1, backgroundColor: 'blue'}} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
});
