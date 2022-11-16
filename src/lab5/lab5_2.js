import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';
import {backend} from '../api/backend';
import {CommonActions} from '@react-navigation/native';

export const Lab5_2 = ({navigation}) => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		backend.getNameList().then(res => setData(res));
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.topText}>NameList </Text>
			{data?.map((item, idx) => (
				<View
					style={{
						marginTop: 10,
						marginHorizontal: 20,
						borderBottomColor: 'black',
						borderBottomWidth: 2,
						justifyContent: 'center',
						paddingHorizontal: 20,
						paddingVertical: 10,
					}}
					key={idx}>
					<Text>{idx + 1 + '-> ' + item.name}</Text>
				</View>
			))}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topText: {
		color: 'black',
		padding: 10,
		fontSize: 20,
		textAlign: 'left',
	},
});
