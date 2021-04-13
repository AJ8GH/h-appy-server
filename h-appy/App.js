/* eslint-disable no-use-before-define */
import { StatusBar } from "expo-status-bar";
import React from "react";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { StyleSheet, Text, View, Button, Alert, FlatList} from "react-native";

function buildItem ( item ){
  return (
  <View style={styles.item}>
    <Text>{item.item.title}</Text>
  </View>)
};

function BuildMenuSection(props){
  const section = props.section;
  const subText = props.subText;
  console.log(DATA[section]);
  return (<CollapsibleView title={section} style={styles.menuCollapsible} noArrow={true}>
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={DATA[section]}
        renderItem = {buildItem}
        keyExtractor={item => item.id}
      />
    </CollapsibleView>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Haddocks!</Text>
      <Button
        title="Fish"
        onPress={() => Alert.alert('here is a fish')}
      />

      <BuildMenuSection section="Nibbles" subText="Nibblelist (Nibbles)" />

      <BuildMenuSection section="Appetisers" subText="very tasty small things" />

      <BuildMenuSection section="Mains" subText="very tasty medium things" />

      <BuildMenuSection section="Desserts" subText="pudding" />

      <StatusBar />
    </View>
  );

}


const DATA = {
  "Nibbles": [
    {
      id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Go to the Cinema',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Do a Puzzle',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Take a long awaited break',
    },
  ],
  "Appetisers": [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53dbb28ba',
      title: 'Do a codewars kata',
    },
    {
      id: 'bd0acjea-c4b1-46c2-red5-3ad53abb28ba',
      title: 'Play a piece of music'
    }
  ],
  "Mains": [
    {
      id: 'ai589cm1-oi5n-alf3-bd96-145571e29d72',
      title: 'Learn a new song on the guitar'
    }
  ],
  "Desserts": [
    {
      id: '3ac68afc-dk30-3kf9-a4f8-fbd91aa9d07k',
      title: 'Browse Reddit for 3 hours'
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
