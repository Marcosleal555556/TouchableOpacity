import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Img() {
  return (
    <View style={styles.container}>
    

    <TouchableOpacity
style={styles.touch}
onPress={() => alert("Foto clicada!(TouchableOpacity)")}>

<Image source={require('../Imagens/login.jpeg')} resizeMode='contain' style={{ height: 10, width: 100 }} />
    </TouchableOpacity>


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
});
