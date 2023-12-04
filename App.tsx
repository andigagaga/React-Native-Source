import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// components
import FlatListItem from './src/Components/FlatList'

const App = () => {
  return (
    <View style={style.container}>
      <FlatListItem/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App