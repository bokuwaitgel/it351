import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image} from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');

const pause = async () => {
	await TrackPlayer.pause();
};
const start = async () => {
	await TrackPlayer.play();
};
export const Lab4_3 = ({navigation}) => {
	const progress = useProgress();
	React.useState(() => {
		TrackPlayer.setupPlayer();
		TrackPlayer.add({
			id: 'trackId',
			url: require('../assets/test2.mp3'),
			title: 'Track Title',
			artist: 'Track Artist',
			artwork: require('../assets/2.jpeg'),
		});
	}, []);
	return (
		<SafeAreaView style={style.container}>
			<View style={style.mainContainer}>
				<View style={[style.imageWrapper, style.elevation]}>
					<Image
						//   source={item.artwork}
						source={require('../assets/2.jpeg')}
						style={style.musicImage}
					/>
				</View>
				<Slider
					style={style.progressBar}
					value={progress.position}
					minimumValue={0}
					maximumValue={progress.duration}
					thumbTintColor="#FFD369"
					minimumTrackTintColor="#FFD369"
					maximumTrackTintColor="#fff"
					onSlidingComplete={async value => {
						await TrackPlayer.seekTo(value);
					}}
				/>
				<View style={style.progressLevelDuraiton}>
					<Text style={style.progressLabelText}>{new Date(progress.position * 1000).toLocaleTimeString().substring(3)}</Text>
					<Text style={style.progressLabelText}>{new Date((progress.duration - progress.position) * 1000).toLocaleTimeString().substring(3)}</Text>
				</View>

				{/* music control */}
				<View style={style.musicControlsContainer}>
					<TouchableOpacity onPress={() => start()}>
						<Text style={style.progressLabelText}>play</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => pause()}>
						<Text style={style.progressLabelText}>pause</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};
const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222831',
	},
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageWrapper: {
		width: 300,
		height: 340,
		marginBottom: 25,
	},
	musicImage: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
	},
	elevation: {
		elevation: 5,

		shadowColor: '#ccc',
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
	},
	progressBar: {
		width: 350,
		height: 40,
		marginTop: 25,
		flexDirection: 'row',
	},
	progressLevelDuraiton: {
		width: 340,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	progressLabelText: {
		color: '#FFF',
	},

	musicControlsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 15,
		width: '60%',
	},
});
