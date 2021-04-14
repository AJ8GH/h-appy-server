import React, { useEffect, useState }  from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native';

function buildItem(item) {
  return (
    <View style={styles.item}>
      <Button
        title={item.item.name}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function BuildMenuSection(props) {
  const { section } = props;
  const { subText } = props;
  const { sectionData } = props;
  return (
    <CollapsibleView title={section} style={styles.menuCollapsible} noArrow>
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={sectionData}
        renderItem={buildItem}
        keyExtractor={(item) => item.id}
        navigation={props.navigation}
      />
    </CollapsibleView>
  );
}

export default function Menu(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/activities')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // const DATA = props.data;
  return (
    <View>
      <BuildMenuSection
        section="Nibbles"
        subText="Nibblelist (Nibbles)"
        sectionData={data.nibbles}
        navigation={props.navigation}
      />

      <BuildMenuSection
        section="Appetisers"
        subText="very tasty small things"
        sectionData={data.appetisers}
        navigation={props.navigation}
      />

      <BuildMenuSection
        section="Mains"
        subText="very tasty medium things"
        sectionData={data.mains}
        navigation={props.navigation}
      />

      <BuildMenuSection
        section="Desserts"
        subText="pudding"
        sectionData={data.desserts}
        navigation={props.navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCollapsible: {
    width: 175,
  },
  menuSubText: {
    textAlign: 'center',
  },
});
