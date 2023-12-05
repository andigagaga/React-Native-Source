import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// components
import AppNavigation from "./Navigation/AppNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
