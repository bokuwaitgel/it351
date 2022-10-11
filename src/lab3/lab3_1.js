import React from 'react';
import {SafeAreaView, ScrollView, Image, Button, StyleSheet, View, Dimensions} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';

const windowWidth = Dimensions.get('window').width;
export const Lab3_1 = ({navigation}) => {
	const [imageWidth, setImageWidth] = React.useState(30);
	const [op, setOp] = React.useState(1);
	const [deg, setDeg] = React.useState(0);
	const [gray, setGray] = React.useState(false);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.butCont}>
				<View style={styles.num}>
					<Button onPress={() => setImageWidth(imageWidth - 10)} title="+" color="#FFF" />
				</View>
				<View style={styles.num}>
					<Button onPress={() => setImageWidth(imageWidth + 10)} title="-" color="#FFF" />
				</View>
				<View style={styles.num}>
					<Button onPress={() => op > 0 && setOp(op - 0.1)} title="o-" color="#FFF" />
				</View>
				<View style={styles.num}>
					<Button onPress={() => op < 1 && setOp(op + 0.1)} title="o+" color="#FFF" />
				</View>
				<View style={styles.num}>
					<Button onPress={() => (deg == 360 ? setDeg(15) : setDeg(deg + 15))} title="r" color="#FFF" />
				</View>
				<View style={styles.num}>
					<Button onPress={() => setGray(!gray)} title="g" color="#FFF" />
				</View>
			</View>
			<View style={{dispay: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
				<View
					style={{
						transform: [{rotate: `${deg}deg`}],
					}}>
					{gray ? (
						<Grayscale>
							<Image style={{width: windowWidth - imageWidth, height: windowWidth - imageWidth, opacity: op}} source={require('../assets/5.jpeg')} />
						</Grayscale>
					) : (
						<Image style={{width: windowWidth - imageWidth, height: windowWidth - imageWidth, opacity: op}} source={require('../assets/5.jpeg')} />
					)}
				</View>
			</View>
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
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	butCont: {
		flex: 6,
		flexDirection: 'row',
		paddingTop: 5,
		paddingHorizontal: 10,
		minHeight: 50,
		maxHeight: 50,
	},
	num: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		flex: 1,
		marginHorizontal: 5,
		backgroundColor: '#843584',
	},
});
