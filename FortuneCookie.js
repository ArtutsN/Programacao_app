import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const frases = [
    'Você terá um dia incrível!',
    'A sorte sorri para você hoje.',
    'Grandes coisas estão por vir.',
    'Confie no seu instinto.',
    'A felicidade está ao seu alcance.',
  ];

  const [biscoitoAberto, setBiscoitoAberto] = useState(false);
  const [mostrarFrases, setMostrarFrases] = useState('');

  const quebraBiscoito = () => {
    setBiscoitoAberto(true);
    const aleatorio = frases[Math.floor(Math.random() * frases.length)];
    setMostrarFrases(aleatorio);
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          biscoitoAberto
            ? { uri: 'https://png.pngtree.com/png-clipart/20231116/original/pngtree-fortune-cookie-opened-shadow-photo-png-image_13574384.png' }
            : { uri: 'https://app-biscoito-da-sorte.vercel.app/src/biscoito.png' }
        }
        style={styles.cookieImage}
      />

      {biscoitoAberto && (
        <Text style={styles.fortuneText}>{mostrarFrases}</Text>
      )}
      <Button title="Quebrar" onPress={quebraBiscoito} />
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
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
