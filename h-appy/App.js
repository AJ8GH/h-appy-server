/* eslint-disable no-use-before-define */
import { StatusBar } from "expo-status-bar";
import React from "react";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { StyleSheet, Text, View, Button, Alert, FlatList} from "react-native";
import Menu from "./views/MainMenu"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Haddocks!</Text>
      <Button
        title="Fish"
        onPress={() => Alert.alert('here is a fish')}
      />

      <Menu data={DATA}/>

      <StatusBar />
    </View>
  );
}


const DATA = {
  "Nibbles": [
    {
      id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Go to the Cinema',
      ingredients: []
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Do a Puzzle',
      ingredients: ['a phone or computer or puzzle book']
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Take a long awaited break',
      ingredients: []
    },
  ],
  "Appetisers": [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53dbb28ba',
      title: 'Do a codewars kata',
      ingredients: ["computer"]
    },
    {
      id: 'bd0acjea-c4b1-46c2-red5-3ad53abb28ba',
      title: 'Play a piece of music',
      ingredients: ['an instrument', 'somewhere private']
    }
  ],
  "Mains": [
    {
      id: 'ai589cm1-oi5n-alf3-bd96-145571e29d72',
      title: 'Learn a new song on the guitar',
      ingredients: ['a guitar']
    }
  ],
  "Desserts": [
    {
      id: '3ac68afc-dk30-3kf9-a4f8-fbd91aa9d07k',
      title: 'Browse Reddit for 3 hours',
      ingredients: ['a phone', 'Ennui']
    }
  ]
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menuCollapsible: {
    width: 175
  },
  menuSubText: {
    textAlign: 'center',
  }
});
