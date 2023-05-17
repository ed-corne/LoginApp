import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import React from "react";

const Layaut = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2F2F2F"></StatusBar>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});

export default Layaut;
