import React from 'react';
import {Text, View} from 'react-native';
import {PricingCard} from 'react-native-elements';

export const Lab9_1 = () => {
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<PricingCard color="#4f9deb" title="Free" price="$0" info={['1 User', 'Basic Support', 'All Core Features']} button={{title: 'GET STARTED', icon: 'flight-takeoff'}} />
		</View>
	);
};
