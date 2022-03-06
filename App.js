import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style test');
 
  const onClickHandler = () => {
    setName('Style test is done')
  };

  return (
    <View style={styles.body}>
      <View style={styles.container1}>
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
      <View style={styles.container2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
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
    flex: 6,
    backgroundColor: '#001fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 8,
    backgroundColor: '#009fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#9909ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#9979ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#950349',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#953349',
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
