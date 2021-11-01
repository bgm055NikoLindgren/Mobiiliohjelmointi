import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [corrnumber, setCorrnumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [quessnumber, setQuessnumber] = useState('');
  const [attemps, setAttemps] = useState(0);
  const [viesti, setViesti] = useState('Guess a number between 1-100!')

  const buttonQuess = () => {

    if (quessnumber > corrnumber) {
      setViesti("Your quess " + quessnumber + " is too high")
      setAttemps(attemps + 1)
    }
    else if (quessnumber < corrnumber) {
      setViesti("Your quess " + quessnumber + " is too low")
      setAttemps(attemps + 1)
    }

    else if (quessnumber == corrnumber) {
      
      Alert.alert('You guessed the correct number in ' + (attemps + 1) + ' quesses');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{viesti}</Text>
        </View>
        <View>
        <TextInput
          keyboardType='numeric'
          style={{ width: 75,  padding: 4, borderColor: 'blue', borderWidth: 2, textAlign: 'center' }}
          onChangeText={quessnumber => setQuessnumber(quessnumber)}
          value={quessnumber}
        />
        <StatusBar style="auto" />
      </View>
      <View>
        <Button
          title="make guess"
          onPress={buttonQuess}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
