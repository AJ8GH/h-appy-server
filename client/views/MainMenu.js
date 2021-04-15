import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState }  from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { StyleSheet, Text, View, Button, Image, Alert, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chez H-Appy</Text>
      </View>
      <Button
        title="About this App"
        onPress={() => navigation.navigate('About')}
      />
      <Menu />
      <Image
        style={styles.homeImage}
        source={require('../forkknife.png')}
      />
      <StatusBar />
    </View>
  );
}
function buildItem(item) {
  return (
    <View style={styles.item}>
      <Button
        title={item.item.name}
      />
    </View>
  );
}

function BuildMenuSection(props) {
  const { section } = props;
  const { subText } = props;
  const { sectionData } = props;
  return (

    <CollapsibleView title={<Text style={styles.menuSection}> {section}</Text>} style={styles.menuCollapsible} noArrow>
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

function Menu(props) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/activities')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <BuildMenuSection
        section="Nibbles"

        subText="Bitesized activities, for the short of time"
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
    backgroundColor: '#f8f9d4'
  },
  menuCollapsible: {
    width: 250,
    fontSize: 50,
    borderRadius: 25,
    borderColor: '#240037'
  },
  menuSubText: {
    textAlign: 'center',
    fontSize: 20
  },
  menuSection: {
    fontSize: 30,
    fontFamily: 'Didot'
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
