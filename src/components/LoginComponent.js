import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Botão Login */}
      <TouchableOpacity
        style={styles.touch}
        onPress={() => alert("Login Efetuado(TouchableOpacity)")}
      >
        <Text
          style={{ fontSize: 100, backgroundColor: "green", color: "white" }}
        >
          Efetuar Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
