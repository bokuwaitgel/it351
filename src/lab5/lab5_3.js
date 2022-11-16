import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

componentWillUnmount = async () => {
	await TrackPlayer.play();
};

export const Lab5_3 = ({navigation}) => {
	const pause = async () => {
		await TrackPlayer.pause();
	};
	const start = async () => {
		TrackPlayer.updateOptions({
			stopWithApp: true,
		});
		await TrackPlayer.add({
			id: 'trackId',
			url: require('../assets/test1.mp3'),
		});
		await TrackPlayer.play();
	};
	React.useState(() => {
		TrackPlayer.setupPlayer({
			stopWithApp: true,
		});
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button
						onPress={() => {
							start();
						}}
						title="play"
						color="#FFF"
					/>
				</View>
			</View>
			<View style={styles.mp}>
				<View style={styles.button}>
					<Button
						onPress={() => {
							pause();
						}}
						title="pause"
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
