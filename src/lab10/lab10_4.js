import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
export const Lab10_4 = () => {
	const startValue = new Animated.Value(1);
	const endValue = 1.5;
	React.useEffect(() => {
		Animated.loop(
			Animated.spring(startValue, {
				toValue: endValue,
				friction: 1,
				useNativeDriver: true,
			}),
			{iterations: 1000},
		).start();
	}, [startValue, endValue]);
	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.square,
					{
						transform: [
							{
								scale: startValue,
							},
						],
					},
				]}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	square: {
		height: 50,
		width: 50,
		backgroundColor: 'red',
	},
});
