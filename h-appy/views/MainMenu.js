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
  const sectionData = props.sectionData;
  console.log(props);
  console.log(sectionData);
  return (<CollapsibleView title={section} style={styles.menuCollapsible} noArrow={true}>
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={sectionData}
        renderItem = {buildItem}
        keyExtractor={item => item.id}
      />
    </CollapsibleView>
  );
}

export default function Menu(props) {
  const DATA = props.data;
  console.log('Menu:')
  // console.log(DATA);
  // console.log(props);
  return(
    <View>
      <BuildMenuSection section="Nibbles" subText="Nibblelist (Nibbles)" sectionData={DATA.Nibbles}/>
    
      <BuildMenuSection section="Appetisers" subText="very tasty small things" sectionData={DATA.Appetisers}/>
    
      <BuildMenuSection section="Mains" subText="very tasty medium things" sectionData={DATA.Mains}/>
    
      <BuildMenuSection section="Desserts" subText="pudding" sectionData={DATA.Desserts}/>
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
