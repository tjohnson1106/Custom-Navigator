import React from "react";
import { StyleSheet, Button, View } from "react-native";

const Screen1 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: "#59C9A5" }]}>
    <Button
      title="Screen 2"
      onPress={() => navigator.push("Screen2")}
    />
    <Button title="Pop" onPress={() => navigator.pop()} />
  </View>
);

const Screen2 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: "#23395B" }]}>
    <Button
      title="Screen 3"
      onPress={() => navigator.push("Screen3")}
    />
    <Button title="Pop" onPress={() => navigator.pop()} />
  </View>
);

const Screen3 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: "#B9E3C6" }]}>
    <Button title="Pop" onPress={() => navigator.pop()} />
  </View>
);

export default Screen1;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
