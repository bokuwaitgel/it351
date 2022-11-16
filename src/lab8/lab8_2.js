import React from 'react';
import {View} from 'react-native';
import PresentationalComponent from './PresentationalComponent';
export class Lab8_2 extends React.Component {
	state = {
		myState: 'This is my state',
	};
	render() {
		return (
			<View>
				<PresentationalComponent myState={this.state.myState} />
			</View>
		);
	}
}
