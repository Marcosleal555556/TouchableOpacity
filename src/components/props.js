import React from "react";
import { View, Text } from "react-native";

const MyComponent = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

export default MyComponent;
