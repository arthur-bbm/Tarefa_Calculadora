import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.titulo}>CALCULADORA</Text>
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
  div: {
    backgroundColor: '#3aaaff80',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4262ff'
    
  },
  titulo: {
    fontSize: 24,
    marginHorizontal: 70
  }
});
