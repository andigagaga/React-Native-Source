import { View, Text, FlatList } from "react-native";
import React from "react";
import { useEffect, useState } from "react";


interface User {
    id: number;
    nama: string;
    username: string;
    email: string;
}

const fetchApi = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUser = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    };

    getUser();
  }, []);

  const renderItem = ({ item } : any) => {
    return (
        <View>
            <Text>
                {item.name}
            </Text>
            <Text>
                {item.username}
            </Text>
            <Text>
                {item.email}
            </Text>
        </View>
    )
  };

  return (
    <View>
      <FlatList data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}/>
    </View>
  );
};

export default fetchApi;
