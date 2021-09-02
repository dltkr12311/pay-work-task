import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { TodoScreen } from "./src/screens";
import { color } from "./src/theme";
import { Provider } from "react-redux";
import store from "store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#fafaff" }} />
      <SafeAreaView style={styles.container}>
        <TodoScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
});
