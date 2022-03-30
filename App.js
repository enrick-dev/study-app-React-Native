import React, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Button, 
  Linking, 
  ScrollView, 
  RefreshControl, 
  FlatList,
  SectionList
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState([
    {key: '1', name: 'Item 1'},
    {key: '2', name: 'Item 2'},
    {key: '3', name: 'Item 3'},
    {key: '4', name: 'Item 4'},
    {key: '5', name: 'Item 5'},
    {key: '6', name: 'Item 6'},
    {key: '7', name: 'Item 7'},
    {key: '8', name: 'Item 8'},
  ]);
  const DATA =[
    {
      title:'title1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title:'title2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title:'title3',
      data: ['Item 3-1'],
    },
    {
      title:'title4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'item 69'}]);
    setRefreshing(false);
  };
  return (
    //-----------------------SECTION LIST------------------------

    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => (
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />

    //-----------------------FLAT LIST------------------------

    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({item})=> (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //     refreshing={ Refreshing }
    //     onRefresh={onRefresh}
    //     colors={['#ff9809']}
    //     />
    //   }
    // />


    //-----------------------SCROLL VIEW------------------------

    // <ScrollView 
    // style={styles.body}
    // refreshControl={
    //   <RefreshControl
    //   refreshing={ Refreshing }
    //   onRefresh={onRefresh}
    //   colors={['#ff9809']}
    //   />
    // }
    // >
    // {
    //   Items.map((object) => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     )
    //   })
    // }
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontStyle: 'italic',
    fontSize: 80,
  },
});

export default App;
