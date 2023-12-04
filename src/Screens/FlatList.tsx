import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';

import DATA from "../dummyData/Data";

export type HalloData = {
  id: number
  title: string
  date: string
}

const FlatListItem = (props: {data: HalloData[]}) => {
  return (
    <View style={{flex: 1}}>
      <View style={style.container_1}>
      <Image
        source={require("../../assets/StartGame.png")}
        style={{ width: 200, height: 200 }}
      />
      <FlatList
      data={props.data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
            <Feather name="smile" size={24} color="black" />
            <Text>
                {item.title}
            </Text>
            <Text>
                {item.date}
            </Text>
        </View>
      )}
      />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_1: {
    backgroundColor: "pink",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container_2: {
    flex: 7,
    backgroundColor: 'yellow',
  },
  text: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
  },
});

export default FlatListItem;
