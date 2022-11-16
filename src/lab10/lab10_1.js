import React, {Component} from 'react';
import {Button} from 'react-native';
export class Lab10_1 extends Component {
	render() {
		return (
			<Button
				onPress={() => {
					alert('You tapped the button!');
				}}
				title="Press Me"
			/>
		);
	}
}
