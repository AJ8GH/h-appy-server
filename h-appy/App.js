/* eslint-disable no-use-before-define */
import { StatusBar } from "expo-status-bar";
import React from "react";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { StyleSheet, Text, View, Button, Alert } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Haddocks!</Text>
      <Button
        title="Fish"
        onPress={() => Alert.alert('here is a fish')}
      />
      
      <CollapsibleView title="Nibbles">
        <Text>little bits</Text>
      
    </CollapsibleView>
      <CollapsibleView title="Appetisers">
        <Text>very tasty small things</Text>      
    </CollapsibleView>
    <CollapsibleView title="Main meals">

        <Text>very tasty medium things</Text>

      
    </CollapsibleView>
    <CollapsibleView title="Desserts">
        <Text>pudding</Text>
      
    </CollapsibleView>
    <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
