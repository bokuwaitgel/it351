import React, {useState} from 'react';
import {Text, Button, StyleSheet, View,SafeAreaView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Lab2_date_clock = ({navigation}) => {
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    function showDatePicker() {
        setDatePicker(true);
    };
    
    function showTimePicker() {
        setTimePicker(true);
    };
    
    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };
    
    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };
    
	return (
	<SafeAreaView style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
 
        <Text style={styles.text}>Date = {date.toDateString()}</Text>
 
        <Text style={styles.text}>Time = {time.toLocaleTimeString('en-US')}</Text>
 
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}
 
        {timePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onTimeSelected}
            style={styles.datePicker}
          />
        )}
 
        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Date" color="green" onPress={showDatePicker} />
          </View>
        )}
 
        {!timePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Time" color="green" onPress={showTimePicker} />
          </View>
        )}
 
      </View>
    </SafeAreaView>
	);
};
const styles = StyleSheet.create({
	MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white'
      },
     
      text: {
        fontSize: 25,
        color: 'red',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center'
      },
     
      // Style for iOS
      datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
      },
});
