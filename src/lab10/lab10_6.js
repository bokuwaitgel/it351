import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = props => {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	//Initial value for opacity: 0
	React.useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 10000,
		}).start();
	}, [fadeAnim]);
	return (
		<Animated.View // Special animatable View
			style={{
				...props.style,
				opacity: fadeAnim, // Bind opacity to animated value,
			}}>
			{props.children}
		</Animated.View>
	);
};
export const Lab10_6 = props => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
				<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
			</FadeInView>
		</View>
	);
};
