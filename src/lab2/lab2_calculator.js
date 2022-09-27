import React from 'react';
import {Button, Text, Image, TextInput, TouchableOpacity, StyleSheet, View} from 'react-native';

export const Lab2_Calculator = ({navigation}) => {
	const [number1, setNumbet1] = React.useState('');
	const [number2, setNumbet2] = React.useState('');
    const [selected, setSelected] = React.useState(0);
	const [res, SetRes] = React.useState(0);
	return (
		<View style={styles.main}>
            <TouchableOpacity onPress={() => setSelected(1)}>
			    <TextInput style={styles.input} onChangeText={setNumbet1} value={number1} placeholder="number 1" keyboardType="numeric" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(2)}>
			    <TextInput style={styles.input} onChangeText={setNumbet2} value={number2} placeholder="number 2" keyboardType="numeric" />
            </TouchableOpacity>
            
                <View style={styles.butCont}>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '0') : selected === 2 ? setNumbet2(number2 + '0' ): null} title="0" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '1') : selected === 2 ? setNumbet2(number2 + '1' ): null} title="1" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '2') : selected === 2 ? setNumbet2(number2 + '2' ): null} title="2" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '3') : selected === 2 ? setNumbet2(number2 + '3' ): null} title="3" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '4') : selected === 2 ? setNumbet2(number2 + '4' ): null} title="4" color="#FFF" />
                    </View>
                </View>
                <View style={styles.butCont}>
                <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '5') : selected === 2 ? setNumbet2(number2 + '5' ): null} title="5" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '6') : selected === 2 ? setNumbet2(number2 + '6' ): null} title="6" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '7') : selected === 2 ? setNumbet2(number2 + '7' ): null} title="7" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '8') : selected === 2 ? setNumbet2(number2 + '8' ): null} title="8" color="#FFF" />
                    </View>
                    <View style={styles.num} >
                        <Button onPress={() => selected === 1 ? setNumbet1(number1 + '9') : selected === 2 ? setNumbet2(number2 + '9' ): null} title="9" color="#FFF" />
                    </View>
                </View>
            <View>
                <View style={styles.mp}>
                    <View style={styles.button} >
                        <Button onPress={() => SetRes(parseInt(number1) + parseInt(number2))} title="ADD" color="#FFF" />
                    </View>
                </View>
                <View style={styles.mp}>
                    <View style={styles.button} >
                        <Button onPress={() => SetRes(parseInt(number1) - parseInt(number2))} title="SUBTRACT" color="#FFF" />
                    </View>
                </View>
                <View style={styles.mp}>
                <View style={styles.button} >
                        <Button onPress={() => SetRes(parseInt(number1) / parseInt(number2))} title="DIVIDE" color="#FFF" />
                    </View>
                </View>

                <View style={styles.mp}>
                    <View style={styles.button} >
                        <Button onPress={() => SetRes(parseInt(number1) * parseInt(number2))} title="MULTIFY" color="#FFF" />
                    </View>
                </View>
            </View>
            <Text style={styles.pt}>Result: {res}</Text>
        </View>
	);
};
const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	main: {
        flex: 1,
        flexDirection: 'column',
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
	butCont: {
        flex: 5, 
        flexDirection: 'row',
        paddingTop: 5,
		paddingHorizontal: 10,
        minHeight:50,
        maxHeight:50,
    },
	button: {
		backgroundColor: "#841584",
	},
    num: {
        alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 5,
        flex: 1,
        marginHorizontal:5,
        backgroundColor: "#843584"
    }
    
});
