/* eslint-disable no-use-before-define */
import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './views/MainMenu';
import Header from './components/header';


const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chez H-Appy</Text>
      </View>
      <Menu data={DATA} navigation={navigation} />
      <Image
        style={styles.homeImage}
        source={require('./forkknife.png')}
      />
      <StatusBar />
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text>This is the Details page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DATA = {
  Nibbles: [
    {
      id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Go to the Cinema',
      ingredients: [],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Do a Puzzle',
      ingredients: ['a phone or computer or puzzle book'],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Take a long awaited break',
      ingredients: [],
    },
  ],
  Appetisers: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53dbb28ba',
      title: 'Do a codewars kata',
      ingredients: ['computer'],
    },
    {
      id: 'bd0acjea-c4b1-46c2-red5-3ad53abb28ba',
      title: 'Play a piece of music',
      ingredients: ['an instrument', 'somewhere private'],
    },
  ],
  Mains: [
    {
      id: 'ai589cm1-oi5n-alf3-bd96-145571e29d72',
      title: 'Learn a new song on the guitar',
      ingredients: ['a guitar'],
    },
  ],
  Desserts: [
    {
      id: '3ac68afc-dk30-3kf9-a4f8-fbd91aa9d07k',
      title: 'Browse Reddit for 3 hours',
      ingredients: ['a phone', 'Ennui'],
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4'
  },
  menuCollapsible: {
    width: 175,
  },
  menuSubText: {
    textAlign: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#c7524a',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Didot'
  },
  homeImage: {
    position: "absolute",
    bottom: 30,
    width: 200,
    height: 200
  }
});
