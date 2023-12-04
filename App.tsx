import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DATA from "./src/dummyData/Data";

// components
import FlatListItem from "./src/Screens/FlatList";

const App = () => {
  return (
    <View style={style.container}>
      <FlatListItem data={DATA} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
