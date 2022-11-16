import React, {useEffect} from 'react';

import {Text, TextInput, Button, StyleSheet, View, TouchableOpacity} from 'react-native';
import {LAB4_2_2} from './../constants/navigations';

import {backend} from '../api/backend';

export const Lab4_2_1 = ({navigation}) => {
	const [data, setData] = React.useState([]);
	useEffect(() => {
		backend.getList().then(res => setData(res));
	}, []);
	return (
		<View style={styles.container}>
			{data?.map(item => (
				<TouchableOpacity onPress={() => navigation.navigate(LAB4_2_2, (route = {item: item}))}>
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
						key={item.id}>
						{console.log(item.name)}
						<Text>{item.name}</Text>
						<Text>{item.description}</Text>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
