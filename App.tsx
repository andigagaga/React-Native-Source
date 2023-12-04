import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// components
import Home from './src/Components/Home'

const App = () => {
  return (
    <View style={style.container}>
      <Home/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App