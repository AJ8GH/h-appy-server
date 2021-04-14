
import React, { useEffect, useState }  from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

function buildItem(item) {
  // return (
  //   <View style={styles.item}>
  //     <Text>{item.item.name}</Text>
  //   </View>
  // );
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details')}
      >
        <Text>{item.item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const badNetworkApiData = [
  {
    id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: "The chef isn't available for requests right now",
    ingredients: [],
  },
]

function BuildMenuSection(props) {
  const { section } = props;
  const { subText } = props;
  let { apiData } = props;
  const { userData } = props;

  apiData = apiData || badNetworkApiData;
  console.log('apiData'); console.log(apiData);
  console.log('userData'); console.log(userData);
  return (

    <CollapsibleView title={<Text style={styles.menuSection}> {section}</Text>} style={styles.menuCollapsible} noArrow>
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={userData}
        renderItem={buildItem}
        keyExtractor={(item) => item.id}
        navigation={props.navigation}
      />
      <View
        style={{
          height: 5,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>Chefs Specials</Text>}
        data={apiData}
        renderItem={buildItem}
        keyExtractor={(item) => item.id}
        navigation={props.navigation}
      />
    </CollapsibleView>
  );
}

export default function Menu(props) {
  const { userData } = props;
  const [isLoading, setLoading] = useState(true);
  const [apiData, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/activities')
      .then((response) => response.json())
      .then((json) => setapiData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <BuildMenuSection
        section="Nibbles"

        subText="Bitesized activities, for the short of time"
        apiData={apiData.nibbles}
        userData={userData.nibbles}
        navigation={props.navigation}
      />

      <BuildMenuSection
        section="Appetisers"
        subText="very tasty small things"
        apiData={apiData.appetisers}
        userData={userData.appetisers}
        navigation={props.navigation}
      />

      <BuildMenuSection
        section="Mains"
        subText="very tasty medium things"
        apiData={apiData.mains}
        userData={userData.mains}
        navigation={props.navigation}
      />

      <BuildMenuSection
        section="Desserts"
        subText="pudding"
        apiData={apiData.desserts}
        userData={userData.desserts}
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
  item: {
    margin: 3,
    padding: 6,
    fontSize: 15,
    backgroundColor: "#ffff99",
    borderRadius: 20,
  }
});
