import React from 'react';
import {SafeAreaView, ScrollView, Button, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {
	LAB1_CALCULATOR,
	LAB1_2,
	LAB2_1,
	LAB2_2,
	LAB2_CAL,
	LAB2_DATE_CLOCK,
	LAB2_CANVAS_DRAWER,
	LAB3_1,
	LAB3_2,
	LAB3_3,
	LAB3_4,
	LAB3_5,
	LAB4_1,
	LAB4_2,
	LAB4_3,
	LAB5_1,
	LAB5_2,
	LAB5_3,
	LAB5_4,
	LAB6_1,
	LAB6_2,
	LAB7_1,
	LAB7_2,
	LAB7_3,
	LAB8_1,
	LAB8_2,
	LAB8_3,
	LAB8_4,
	LAB9_1,
	LAB9_2,
	LAB9_3,
	LAB9_4,
	LAB9_5,
	LAB9_6,
	LAB10_1,
	LAB10_2,
	LAB10_3,
	LAB10_4,
	LAB10_5,
	LAB10_6,
} from './constants/navigations';
const Home = ({navigation}) => {
	return (
		<ScrollView>
			<View style={{paddingBottom: 40}}>
				<Text style={styles.topText}>Lab 1 </Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB1_CALCULATOR)} title="lab1_calculator" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB1_2)} title="lab1-2" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 2 </Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB2_1)} title="lab2-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB2_2)} title="lab2-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB2_CAL)} title="lab2-cal" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB2_DATE_CLOCK)} title="lab2-date-clock" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB2_CANVAS_DRAWER)} title="lab2-canvas-drawer" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 3 </Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB3_1)} title="lab3-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB3_2)} title="lab3-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB3_3)} title="lab3-3" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB3_4)} title="lab3-4" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB3_5)} title="lab3-5" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 4</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB4_1)} title="lab4-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB4_2)} title="lab4-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB4_3)} title="lab4-3" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 5</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB5_1)} title="lab5-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB5_2)} title="lab5-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB5_3)} title="lab5-3" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB5_4)} title="lab5-4" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 6</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB6_1)} title="lab6-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB6_2)} title="lab6-2" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 7</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB7_1)} title="lab7-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB7_2)} title="lab7-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB7_3)} title="lab7-3" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 8</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB8_1)} title="lab8-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB8_2)} title="lab8-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB8_3)} title="lab8-3" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB8_4)} title="lab8-4" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 9</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB9_1)} title="lab9-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB9_2)} title="lab9-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB9_3)} title="lab9-3" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB9_4)} title="lab9-4" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB9_5)} title="lab9-5" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB9_6)} title="lab9-6" color="#FFF" />
					</View>
				</View>
				<Text style={styles.topText}>Lab 10</Text>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB10_1)} title="lab10-1" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB10_2)} title="lab10-2" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB10_3)} title="lab10-3" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB10_4)} title="lab10-4" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB10_5)} title="lab10-5" color="#FFF" />
					</View>
				</View>
				<View style={styles.mp}>
					<View style={styles.button}>
						<Button onPress={() => navigation.navigate(LAB10_6)} title="lab10-6" color="#FFF" />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mp: {
		paddingTop: 5,
		paddingHorizontal: 10,
	},
	topText: {
		color: 'black',
		padding: 10,
		fontSize: 20,
		textAlign: 'left',
	},
	button: {
		backgroundColor: '#841584',
	},
});

export default Home;
