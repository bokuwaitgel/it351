import React from 'react';
import {Text, View} from 'react-native';
export class Lab7_2 extends React.Component {
	state = {
		myState:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	};
	updateState = () => this.setState({myState: 'The state is updated'});
	render() {
		return (
			<View>
				<Text onPress={this.updateState}>{this.state.myState}</Text>
			</View>
		);
	}
}
