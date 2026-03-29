import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.estrutura}>
        <View style={styles.div_titulo}>
          <Text style={styles.titulo}>CALCULADORA</Text>
        </View>
        <View style={styles.div_input}>
          <TextInput 
            placeholder='Valor 01 [placeholder]'
            placeholderTextColor='#f2aba9'
            style={styles.input}
          />
        </View>
        <View style={styles.div_input}>
          <TextInput 
            placeholder='Valor 02 [placeholder]'
            placeholderTextColor='#f2aba9'
            style={styles.input}
          />
        </View>
        <View style={styles.div_buttons}>
          <Button color='#60a917' title='SOMAR'/>
          <Button color='#d70071' title='SUBTRAIR'/>
          <Button color='#a20025' title='MULTIPLICAR'/>
          <Button color='#004fee' title='DIVIDIR'/>
        </View>
        <View style={styles.div_texto}>
          <Text style={styles.texto}>0</Text>
        </View>
      </View>
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
  estrutura: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 70,
  },
  div_titulo: {
    backgroundColor: '#dae8fc',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a6bee0'
  },
  titulo: {
    fontSize: 30,
    marginHorizontal: 70
  },
  div_input: {
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontStyle: 'italic'
  },
  div_buttons: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  div_texto: {
    backgroundColor: '#050505',
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 30,
    marginHorizontal: 70,
    fontWeight: 'bold',
    color: 'white'
  }
});
