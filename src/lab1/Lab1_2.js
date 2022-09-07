import React from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-radio-buttons-group';
const radioButtonsData = [
	{
		id: '1', // acts as primary key, should be unique and non-empty string
		label: 'cat',
		value: 'cat',
	},
	{
		id: '2',
		label: 'dog',
		value: 'dog',
	},
	{
		id: '3',
		label: 'mouse',
		value: 'mouse',
	},
	{
		id: '4',
		label: 'rabbit',
		value: 'rabbit',
	},
];
const imgUrl = [
	'http://teslarzone.in/wp-content/uploads/2014/04/dummy-image-green-e1398449160839-1024x732.jpg',
	'https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg',
	'https://hips.hearstapps.com/vidthumb/images/gettyimages-155696335-1619709287.jpg',
	'https://cliparting.com/wp-content/uploads/2016/06/Computer-mouse-clipart-black-and-white-free.jpg',
	'https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-care-sheet',
];
export const Lab1_2 = ({navigation}) => {
	const [radioButtons, setRadioButtons] = React.useState(radioButtonsData);
	const [id, setId] = React.useState(0);
	function onPressRadioButton(radioButtonsArray) {
		setRadioButtons(radioButtonsArray);
		radioButtonsArray.find(t => t.selected === true && setId(t.id));
	}

	const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
	return (
		<View>
			<View style={styles.top}>
				<Text style={styles.topText}>Lab 1 - 2</Text>
			</View>
			<Text style={styles.pt}>Click start</Text>
			<View style={styles.checkboxContainer}>
				<CheckBox disabled={false} value={toggleCheckBox} onValueChange={newValue => setToggleCheckBox(newValue)} />
				<Text style={styles.label}>start</Text>
			</View>
			{toggleCheckBox && (
				<View>
					<View style={styles.radio}>
						<Text style={styles.pt}>Choose ur fav pet...</Text>
						<RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout="row" />
					</View>
					<View>
						<View style={styles.selected}>
							<Text style={styles.text}>SELECTED</Text>
						</View>
						<Image
							style={styles.imageCont}
							source={{
								uri: imgUrl[id],
							}}
						/>
					</View>
				</View>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxContainer: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: 'center',
	},
	label: {
		margin: 8,
	},
	topText: {
		color: 'white',
		padding: 10,
		fontSize: 20,
		textAlign: 'left',
	},
	pt: {
		paddingLeft: 10,
		paddingTop: 5,
		fontSize: 20,
		color: 'black',
	},
	mp: {
		paddingTop: 5,
		paddingHorizontal: 10,
	},
	top: {
		display: 'flex',
		backgroundColor: 'blue',
		height: 60,
	},
	text: {
		color: 'white',
		padding: 10,
		fontSize: 20,
		textAlign: 'center',
	},
	radio: {
		display: 'flex',
	},
	selected: {
		borderRadius: 5,
		margin: 10,
		width: 200,
		backgroundColor: 'pink',
	},
	imageCont: {
		marginTop: 20,
		marginLeft: 100,
		width: 150,
		height: 150,
	},
});
