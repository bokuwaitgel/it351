import React, {Component} from 'react';
import {Button} from 'react-native';
export class Lab11_2 extends Component {
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
