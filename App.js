import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Fundo from "./src/components/FundoComponent";
import Img from "./src/components/ImgButtonComponent";
import Login from "./src/components/LoginComponent";
import Singin from "./src/components/SingIn Component";
export default function App() {
  return (
    <View style={styles.container}>
      <Fundo>
        <Img />
        <Login />
        <Singin />
      </Fundo>
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
