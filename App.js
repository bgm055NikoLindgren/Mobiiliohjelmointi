import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: result }]);

  }

  // Jäi kesken, en saanut toimimaan, kuinka number1, number2 ja result saisi kaikki kerralla näytettyä FlatListalla

  return (

    <View style={styles.container}>

      <Text>Result: {result}</Text>

      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={number1 => setNumber1(number1)}
        value={number1}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={number2 => setNumber2(number2)}
        value={number2}
      />

      <View style={styles.buttons}>

        <Button
          style={styles.buttons}
          title="-"
          onPress={() => setResult(number1 - number2)
          }
        />
        <Button
          style={styles.buttons}
          title="+"
          onPress={() => setResult(+number1 + +number2)
          }
        />
        <Button
          title="historiaa"
          onPress={() => buttonPressed}
        />
      </View>

      <Text style={styles.history}>History</Text>
      <FlatList data={data}
        renderItem={(item) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',


  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    flexDirection: 'row',
  },
  history: {
    marginTop: 40
  },
});
