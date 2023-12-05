import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const City = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/City-Background.jpg")}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, marginTop: 50 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <FontAwesome5 name="home" size={24} color="black" />
            <Entypo
              name="video-camera"
              size={24}
              color="black"
              style={{ marginHorizontal: 10 }}
            />
            <Ionicons name="camera-reverse-sharp" size={24} color="black" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>Carier</Text>
              <FontAwesome name="wifi" size={24} color="black" />
            </View>
            <View>
              <Text>1:18 PM</Text>
            </View>
            <View>
              <FontAwesome name="battery-4" size={24} color="black" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 50, fontWeight: "bold", color: "white" }}
              >
                LONDON
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
