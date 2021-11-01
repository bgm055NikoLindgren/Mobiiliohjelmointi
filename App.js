import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');


  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>

        <Text>Result: {result}</Text>

        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={number1 => setNumber1(number1)}
          value={number1}
        />
        <TextInput keyboardType='numeric'
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={number2 => setNumber2(number2)}
          value={number2}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          onPress={() => setResult(number1 - number2)}
          title="-"
        />
        <Button
          onPress={() => setResult(+number1 + +number2)}
          title="+"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4EEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
