// Importaciones 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Dimensions, FlatList, SectionList } from 'react-native';
//import React,{useState} from 'react'; //Importacion para hacer usos de datos



//Funciones 
/* const Texto=({estilo})=>{ // Parametros en este caso estilos que estilo
  const[contenido, setContenido] = useState('holaMundo') // Variable de contenido (propiedad children), se u
  const actualizarContenido=()=>{ // Array function que va a permitir hacer esa actualizacion
    setContenido('State actualizó este texto')} 
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>) // Mandar llamar el evento 
  // con 'style' especificamos la copnexión que está en styles, y colocamos el estilo de texto y estilo
} */

//Existen componentes, area donde se va a ejecutar
export default function App() {

  return (

    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Grupo A',
            data:[
              {key:1, name:'Maya'},
              {key:2, name:'Diego'},
              {key:3, name:'Mar'},
              {key:4, name:'Andy'},]
          }, // llave del título 

          { title: 'Grupo B',
            data:[
              {key:5, name:'Ale'},
              {key:6, name:'Leo'},
              {key:7, name:'Mary'}, ]
          }, // llave del título 

          { title: 'Grupo C',
            data:[
              {key:8, name:'Ale'},
              {key:9, name:'Leo'},
              {key:10, name:'Mary'}, ]
          }, // llave del título 
        ]} // secciones que llevara cada uno de los componentes de la lista
        renderItem={({item})=> <Text style={styles.item}> {item.name} </Text>}
        renderSectionHeader={({section})=> <Text style={styles.section}> {section.title} </Text>} // renderiza las secciones 
      />

      <StatusBar style="auto" />
    </View>
  );
}

// Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //La forma en la que se acomoda el texto ("orden")
    backgroundColor: '#fff',
    alignItems: 'strech', // alinea el orden de izquierda a derecha
    justifyContent: 'center', // orden de arriba a abajo
    paddingTop: 50
  },

  item:{
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1
  },

  section:{
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 4,
    paddingBottom: 4
  }

});


/* const Boton=()=>{ // Parametros 
  const[contenido, setContenido] = useState('Presioname') // Variable de contenido (propiedad children), se u 
  const actualizarContenido=()=>{// Array function que va a permitir hacer esa actualizacion 
    setContenido('State actualizó este boton')
  } 
  return(<Button title={contenido} color="#000000" onPress={actualizarContenido}>{contenido}</Button>) // Mandar llamar el evento 
} */