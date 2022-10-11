import React from 'react';
import {Text, Image, StyleSheet, View, Dimensions} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
export const Lab3_5 = ({navigation}) => {
	const clr = ['white', 'red', 'green', 'blue'];
	const clrbut = ['grey', '#843584'];
	const [visibleBack, setVisibleBack] = React.useState(false);
	const [visibleBut, setVisibleBut] = React.useState(false);
	const [color, setColor] = React.useState(0);
	const [colorbut, setColorbut] = React.useState(0);
	const openMenuBack = () => setVisibleBack(true);
	const closeMenuBack = () => setVisibleBack(false);
	const openMenuBut = () => setVisibleBut(true);
	const closeMenuBut = () => setVisibleBut(false);
	return (
		<Provider>
			<Menu visible={visibleBack} onDismiss={closeMenuBack} anchor={{x: windowWidth, y: 40}}>
				<Menu.Item onPress={() => setColor(1)} title="Background Red" />
				<Menu.Item onPress={() => setColor(2)} title="Background Greed" />
				<Menu.Item onPress={() => setColor(3)} title="Background Blue" />
			</Menu>
			<Menu visible={visibleBut} onDismiss={closeMenuBut} anchor={{x: windowWidth, y: 100}}>
				<Menu.Item onPress={() => setColorbut(0)} title="Background gray" />
				<Menu.Item onPress={() => setColorbut(1)} title="Background pink" />
			</Menu>
			<View
				style={{
					backgroundColor: clr[color],
					height: '100%',
				}}>
				<Text style={styles.topText}>TEST</Text>
				<Button
					style={{
						margin: 10,
						width: 200,
						justifyContent: 'center',
						backgroundColor: clrbut[colorbut],
						borderRadius: 10,
					}}
					onPress={openMenuBack}>
					<Text style={{color: 'white'}}>backgroundColor</Text>
				</Button>
				<Button
					style={{
						margin: 10,
						width: 200,
						justifyContent: 'center',
						backgroundColor: clrbut[colorbut],
						borderRadius: 10,
					}}
					onPress={openMenuBut}>
					<Text style={{color: 'white'}}>buttonColor</Text>
				</Button>
			</View>
		</Provider>
	);
};
const styles = StyleSheet.create({
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
