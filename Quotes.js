import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const frases = [
    {
      frase: "Ninguém além de nós mesmos pode libertar nossa mente.",
      autor: "Bob Marley",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwmXQYmG3rViOoxz9Dn8lbMzQAffpwkm_yQ&s",
    },
    {
      frase:
        "Seu tempo é limitado, então não percam tempo vivendo a vida de outro.",
      autor: "Steve Jobs",
      foto:
        "https://w7.pngwing.com/pngs/1015/176/png-transparent-steve-jobs-apple-ipad-iphone-technology-steve-jobs-celebrities-company-computer-thumbnail.png",
    },
    {
      frase:
        "A imaginação é mais importante que o conhecimento, porque o conhecimento é limitado, ao passo que a imaginação abrange o mundo inteiro.",
      autor: "Albert Einstein",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrQqjoBW3WnjywBNWc7ugN_sKKrH86wLGJw&s",
    },
    {
      frase:
        "Contos de fadas são mais que verdade; não porque nos dizem que dragões existem, mas porque eles nos dizem que dragões podem ser derrotados.",
      autor: "Neil Gaiman",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8QixezzVZYImRF-tBxM4zTjVye-jprHDuw&s",
    },
    {
      frase:
        "Livre-se dos bajuladores. Mantenha perto de você pessoas que te avisem quando você erra.",
      autor: "Barack Obama",
      foto:
        "https://cdn.prod.website-files.com/62e89931273b5c21be76c486/66c375497f42fe912a0734e7_Official_portrait_of_Barack_Obama.jpg",
    },
    {
      frase: "A persistência é o caminho do êxito.",
      autor: "Charles Chaplin",
      foto:
        "https://photoarts.com.br/wp-content/uploads/2019/12/Chaplin-em-Fundo-Branco.jpg",
    },
  ];

  const [frase, setFrase] = useState(frases[0]);

  const aleatorio = () => {
    const fraseAleatoria = Math.floor(Math.random() * frases.length);
    setFrase(frases[fraseAleatoria]);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: frase.foto }} style={styles.foto} />
      <Text style={styles.frase}>"{frase.frase}"</Text>
      <Text style={styles.autor}>- {frase.autor}</Text>
      <Button title="Citação" onPress={aleatorio} />
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
    padding: 20,
  },
  foto: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  frase: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
  },
  autor: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
