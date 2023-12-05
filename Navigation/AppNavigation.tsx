import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Component
import City from '../src/Screens/City';
import FlatListItem from '../src/Screens/FlatList';
import State from '../src/Screens/State';


import DATA from '../src/dummyData/Data';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
   <Tab.Navigator
   screenOptions={{
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'grey',
    tabBarStyle: {
      backgroundColor: 'lightblue'
    },
    headerStyle: {
      backgroundColor: 'lightblue'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'tomato'
    }
   }}
   >
    <Tab.Screen name='City' component={City} options={{
      tabBarIcon: ({ focused }) => <Feather name={'home'} size={20} color={focused ? 'tomato' : 'black'}/>
    }}/>
    <Tab.Screen name='FlatListItem' options={{
      tabBarIcon: ({focused}) => <Feather name='activity' size={20} color={focused ? 'tomato' : 'black'}/>
    }}>
      {() => <FlatListItem data={DATA}/>}
    </Tab.Screen>
    <Tab.Screen name='State' component={State} options={{
      tabBarIcon: ({focused}) => <Feather name='settings' size={20} color={focused ? 'tomato' : 'black'}/>
    }}/>
   </Tab.Navigator>
  )
}

export default AppNavigation