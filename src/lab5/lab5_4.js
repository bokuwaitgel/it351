import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const Lab5_4 = ({navigation}) => {
	const [batterylvl, setBatterylvl] = React.useState();
	const [charge, setCharge] = React.useState();
	const [color, setColor] = React.useState();
	React.useEffect(() => {
		const updateBatteryLevel = () => {
			const getColer = () => {
				if (charge) {
					return setColor('#13F0A9');
				}
				if (batterylvl <= 10) {
					return setColor('FF5D3D');
				}
				if (batterylvl < 80) {
					return setColor('#FF8A00');
				}
				if (batterylvl <= 100) {
					return setColor('#252E41');
				}
			};
			DeviceInfo.isBatteryCharging().then(battery => {
				console.log(battery);
				setCharge(battery);
			});
			DeviceInfo.getBatteryLevel().then(batteryLevel => {
				setBatterylvl(Math.floor(batteryLevel * 100));
			});
			getColer();
		};

		updateBatteryLevel();

		const timer = setInterval(updateBatteryLevel, 1000 * 60 * 5);
		return () => clearInterval(timer);
	}, [batterylvl, charge]);
	return (
		<View style={styles.container}>
			<Text style={{color: color}}>Current charge: {batterylvl}</Text>
			<Text>Connection: {charge ? 'True' : 'False'}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
