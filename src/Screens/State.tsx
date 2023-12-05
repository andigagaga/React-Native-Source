import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text
          style={{ textAlign: "center", marginBottom: 10 }}
        >{`Count: ${count}`}</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              backgroundColor: "red",
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => setCount(count - 1)}
          >
            <Text>Mins -</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              backgroundColor: "green",
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => setCount(count + 1)}
          >
            <Text>Add +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default State;
