import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AppInterno() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>INDMO</Text>
      <Text style={styles.subtitulo}>Hello World!!</Text>
    </View> 
   );
  }

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  titulo: {
    fontSize: 90,
    fontWeight: "bold",
    color: "red",
  },
  subtitulo: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
})