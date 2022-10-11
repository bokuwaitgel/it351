import React, {useState} from 'react';
import {SafeAreaView, Button, Text, View, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
const windowWidth = Dimensions.get('window').width;
const images = [
	require('../assets/1.jpeg'),
	require('../assets/2.jpeg'),
	require('../assets/3.jpeg'),
	require('../assets/4.jpeg'),
	require('../assets/5.jpeg'),
	require('../assets/6.jpeg'),
];

export const Lab3_3 = ({navigation}) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [id, setIndex] = useState(0);
	const toggleModal = n => {
		setModalVisible(!isModalVisible);
		setIndex(n);
	};
	return (
		<SafeAreaView>
			<FlatList
				style={{margin: 5}}
				columnWrapperStyle={{justifyContent: 'space-between', marginTop: 10}}
				data={images}
				numColumns={3}
				renderItem={({item, index}) => (
					<TouchableOpacity onPress={() => toggleModal(index)}>
						<Image key={index} style={styles.image} source={item} />
					</TouchableOpacity>
				)}
			/>
			<Modal isVisible={isModalVisible}>
				<View style={{flex: 1}}>
					<Image style={{width: windowWidth - 30, height: windowWidth - 30, marginTop: 100}} source={images[id]} />
					<Button title="exit" onPress={toggleModal} />
				</View>
			</Modal>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	button: {
		margin: 5,
		width: 150,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'grey',
		borderRadius: 10,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		width: windowWidth / 3 - 30,
		height: windowWidth / 3 - 30,
	},
});
