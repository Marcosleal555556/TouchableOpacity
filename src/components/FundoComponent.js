import { View, Text } from "react-native";

export default function Fundo({ children }) {
  return <View style={{ backgroundColor: "red" }}>{children}</View>;
}
