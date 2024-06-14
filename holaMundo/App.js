// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de datos

//Funciones 
const Texto=({estilo})=>{ /* Parametros */
  const[contenido, setContenido] = useState('holaMundo') /* Variable de contenido (propiedad children), se u */
  const actualizarContenido=()=>{/* Array function que va a permitir hacer esa actualizacion */
    setContenido('State actualizó este texto')
  } 
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>) /* Mandar llamar el evento */
}

const Boton=()=>{ /* Parametros */
  const[contenido, setContenido] = useState('Presioname') /* Variable de contenido (propiedad children), se u */
  const actualizarContenido=()=>{/* Array function que va a permitir hacer esa actualizacion */
    setContenido('State actualizó este boton')
  } 
  return(<Button title={contenido} color="#000000" onPress={actualizarContenido}>{contenido}</Button>) /* Mandar llamar el evento */
}

//Existen componentes, area donde se va a ejecutar
export default function App() {
  return (

    <View style={styles.container}>
      <Texto estilo={styles.red}/>
      <Texto estilo={styles.green}/>
      <Texto estilo={styles.blue}/>

      <StatusBar style="auto" />
    </View>
  );
}

// Configuraciones de hijas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text:{
    color: 'white',
    fontSize: 25, 
    height: 150,
  },
red:{
  /*flex: 1,*/
  backgroundColor:'red',
},
green:{
  /*flex: 2,*/
  backgroundColor:'green',
},
blue:{
  //flex: 3,
  backgroundColor:'blue',
}
});




