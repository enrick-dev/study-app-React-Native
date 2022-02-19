import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';

const App = () => {
  const [click, setClick] = useState(0)
  const [count, setCount] = useState(0)

  const onClickHandler = () => {
    setClick(click + 3)
    setCount(count + 1)
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{click}</Text>
      <Button title="Update" onPress={onClickHandler} />
      <Text style={styles.text}>You clicked {count} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
