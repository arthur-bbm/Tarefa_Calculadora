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
            placeholderTextColor='red'
            style={styles.input}
          />
        </View>
        <View style={styles.div_input}>
          <TextInput 
            placeholder='Valor 02 [placeholder]'
            placeholderTextColor='red'
            style={styles.input}
          />
        </View>
        <View style={styles.div_buttons}>
          <Button color='#4d9d37' title='SOMAR'/>
          <Button color='#ca1bc1' title='SUBTRAIR'/>
          <Button color='#830034' title='MULTIPLICAR'/>
          <Button color='#0053d7' title='DIVIDIR'/>
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
    paddingHorizontal: 10
  },
  div_titulo: {
    backgroundColor: '#3aaaff80',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4262ff'
    
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
    width: 345,
    padding: 10,
    fontStyle: 'italic'
  },
  div_buttons: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
