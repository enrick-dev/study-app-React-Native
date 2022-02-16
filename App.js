import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState('Enrick');

  const onClickHandler = () => {
    setName('Programando com Enrick');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Button title="Update" onPress={onClickHandler} />
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
