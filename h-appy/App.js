/* eslint-disable no-use-before-define */
import { StatusBar } from "expo-status-bar";
import React from "react";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { StyleSheet, Text, View, Button, Alert, FlatList} from "react-native";


export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <Text>Hello Haddocks!</Text>
      <Button
        title="Fish"
        onPress={() => Alert.alert('here is a fish')}
      />

      <CollapsibleView title="Nibbles" style={styles.menuCollapsible} noArrow={true}>
        <Text>Nibblelist(Nibbles)</Text>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </CollapsibleView>
      <CollapsibleView title="Appetisers" style={styles.menuCollapsible} noArrow={true}>
        <Text>very tasty small things</Text>
    </CollapsibleView>
    <CollapsibleView title="Main meals" style={styles.menuCollapsible} noArrow={true}>

        <Text>very tasty medium things</Text>


    </CollapsibleView>
    <CollapsibleView title="Desserts" style={styles.menuCollapsible} noArrow={true}>
        <Text>pudding</Text>

    </CollapsibleView>
    <StatusBar />
    </View>
  );

}


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
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
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
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
});
