import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(0)

  function adicionarNumero() {
    setNumero(numero + 1)
  }

  function diminuirNumero() {
    setNumero(numero - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>{numero}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Adicionar' onPress={adicionarNumero}/>
        <Button title='Diminuir' onPress={diminuirNumero}/>
      </View>
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
  textTimer:{
    fontSize: 50,
  },

  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});
