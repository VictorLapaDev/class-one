import { Platform, StyleSheet} from 'react-native';

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
      color: Platform.OS === "ios" ? "red" : "green",
    },
    subtitulo: {
      fontSize: 30,
      color: Platform.OS === "ios" ? "green" : "red",
      fontWeight: 500,
    }
  })
