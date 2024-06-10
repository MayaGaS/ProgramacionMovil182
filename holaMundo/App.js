// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

// Ejecucion de mi App
export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hola Mundo!</Text>
      <Button title='Presioname'></Button>

      <StatusBar style="auto" />
    </View>
  );
}

// Hojas de estilo 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
