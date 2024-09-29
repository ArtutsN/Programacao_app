import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [minutos, setMinutos] = useState(0)
  const [segundos, setSegundos] = useState(0)
  const [milissegundos, setMilissegundos] = useState(0)
  const [customInterval, setCustomInterval] = useState()

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 10)
    )
  }

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval)
      setCustomInterval(null)
    }
  }

  const clear = () => {
    stopTimer()
    setMinutos(0)
    setSegundos(0)
    setMilissegundos(0)
  }

  const changeTime = () => {
    setMilissegundos((prevMilissegundos) => {
      if (prevMilissegundos + 10 >= 1000) {
        setSegundos((prevSegundos) => {
          if (prevSegundos + 1 === 60) {
            setMinutos((prevMinutos) => prevMinutos + 1)
            return 0
          }
          return prevSegundos + 1
        })
        return 0
      }
      return prevMilissegundos + 10
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>
        {minutos < 10 ? '0' + minutos : minutos}:
        {segundos < 10 ? '0' + segundos : segundos}:
        {milissegundos < 100 ? (milissegundos < 10 ? '00' + milissegundos : '0' + milissegundos) : milissegundos}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar" onPress={startTimer} />
        <Button title="Parar" onPress={stopTimer} />
        <Button title="Limpar" onPress={clear} />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTimer: {
    fontSize: 50,
  },

  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
})
