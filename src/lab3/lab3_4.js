import React from 'react';
import {Text, Image, StyleSheet, View, Dimensions} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
export const Lab3_4 = ({navigation}) => {
	const clr = ['white', 'red', 'green', 'blue'];
	const [visible, setVisible] = React.useState(false);
	const [color, setColor] = React.useState(0);
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);
	return (
		<Provider>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'flex-end',
					backgroundColor: '#843584',
				}}>
				<Button onPress={openMenu}>
					<Text style={{color: 'white'}}>Show menu</Text>
				</Button>
				<Menu visible={visible} onDismiss={closeMenu} anchor={{x: windowWidth, y: 40}}>
					<Menu.Item onPress={() => setColor(1)} title="Background Red" />
					<Menu.Item onPress={() => setColor(2)} title="Background Greed" />
					<Menu.Item onPress={() => setColor(3)} title="Background Blue" />
				</Menu>
			</View>
			<View
				style={{
					backgroundColor: clr[color],
					height: '100%',
				}}>
				<Text style={styles.topText}>TEST</Text>
				<Button style={styles.button} onPress={() => setColor(0)}>
					<Text style={{color: 'white'}}>Start</Text>
				</Button>
			</View>
		</Provider>
	);
};
const styles = StyleSheet.create({
	button: {
		margin: 10,
		width: 150,
		justifyContent: 'center',
		backgroundColor: 'grey',
		borderRadius: 10,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	topText: {
		color: 'black',
		padding: 10,
		fontSize: 20,
		textAlign: 'left',
	},
});
