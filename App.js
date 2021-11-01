import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';



export default function App() {

  const [text, setText] = useState('');
  const[data, setData] = useState([]);

  const addButton = () => {
    setData([...data, {key:text }]);
    setText('');
  }

  const clearButton = () => {
    setData('')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />

      <View style={styles.button}>
      <Button onPress={addButton} title="ADD" />
      <Button onPress={clearButton} title="CLEAR" />
      </View>

      <Text >Shopping List</Text>
      <FlatList 
      data = {data}
      renderItem={({item}) =>

      <Text>{item.key}</Text>}

      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 250,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    flexDirection: "row",
  }
});
