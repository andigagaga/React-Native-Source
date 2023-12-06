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

  const [nama, setNama] = useState("apa aja deh");

  const handleSubmit = () => {
    setNama("asep")
  }

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
      <View style={{marginTop: 50}}>
        <Text>
          {nama}
        </Text>
        <View>
          <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: 'green', padding:5, }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Ganti Nama
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default State;
