import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';


const DATA = [
    {
        id: 1,
        title: "hallo1",
        date: "01-08-2003"
    },
    {
        id: 2,
        title: "hallo2",
        date: "01-08-2004"
    },
    {
        id: 3,
        title: "hallo3",
        date: "01-08-2005"
    },
]

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.container_1}>
      <FlatList 
      data={DATA}
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
    flex: 1
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

export default Home;
