import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style test');
 
  const onClickHandler = () => {
    setName('Style test is done')
  };

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff234',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#001fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#009fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 40,
    textTransform: 'uppercase',
  },
});

export default App;
