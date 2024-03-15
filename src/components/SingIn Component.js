import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Singin() {
  return (
    <View style={styles.container}>
      {/* Botão SingIn */}
      <TouchableOpacity
        style={styles.touch}
        onPress={() => alert("Sing In(TouchableOpacity)")}
      >
        <Text
          style={{ fontSize: 50, backgroundColor: "purple", color: "black" }}
        >
          Efetuar SingIn
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
