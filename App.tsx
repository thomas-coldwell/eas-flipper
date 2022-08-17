import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

//@ts-ignore
import { connectToDevTools } from "react-devtools-core";
import { useState } from "react";
if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show && <Text>Open up App.tsx to start working on your app!</Text>}
      <StatusBar style="auto" />
      <Button title="Press me!" onPress={() => setShow(!show)} />
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
