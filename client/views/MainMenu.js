import React from "react";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { StyleSheet, Text, View, Button, Alert, FlatList} from "react-native";



function buildItem ( item ){
  return (
  <View style={styles.item}>
    <Button
        title={item.item.title}
        onPress={() => navigation.navigate('Details')}
      />
  </View>)
};

function BuildMenuSection(props){
  const section = props.section;
  const subText = props.subText;
  const sectionData = props.sectionData;
  return (<CollapsibleView title={section} style={styles.menuCollapsible} noArrow={true}>
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={sectionData}
        renderItem = {buildItem}
        keyExtractor={item => item.id}
        navigation={props.navigation}
      />
    </CollapsibleView>
  );
}

export default function Menu(props) {
  const DATA = props.data;
  return(
    <View>
      <BuildMenuSection section="Nibbles" subText="Nibblelist (Nibbles)" sectionData={DATA.Nibbles} navigation={props.navigation}/>
    
      <BuildMenuSection section="Appetisers" subText="very tasty small things" sectionData={DATA.Appetisers} navigation={props.navigation}/>
    
      <BuildMenuSection section="Mains" subText="very tasty medium things" sectionData={DATA.Mains} navigation={props.navigation}/>
    
      <BuildMenuSection section="Desserts" subText="pudding" sectionData={DATA.Desserts} navigation={props.navigation}/>
    </View>
  )
}

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
