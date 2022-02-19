import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style test');
 
  const onClickHandler = () => {
    setName('Style test is done')
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title="Update" onPress={onClickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff9919',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff0034',
    borderRadius: 10,
  },
  text: {
    color: '#000',
    fontSize: 40,
    textTransform: 'uppercase',
  },
  button: {
    width: 150,
    height: 60,
  }
});

export default App;
