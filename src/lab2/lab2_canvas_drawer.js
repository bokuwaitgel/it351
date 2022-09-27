import React, {useRef} from 'react';
import {Text, SafeAreaView, TouchableHighlight, Dimensions, StyleSheet, View} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Lab2_canvas_drawer = ({navigation}) => {
  const signatureRef = useRef(null);
  const resetSign = () => {
    signatureRef.current.resetImage();
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignatureCapture
          style={styles.signature}
          ref={signatureRef}
          minStrokeWidth={4}
          maxStrokeWidth={4}
          maxSize={4}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode='portrait'
		      backgroundColor={ '#F5F7FA'}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              resetSign();
            }}>
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});