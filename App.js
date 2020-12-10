import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Date.now(),
      text: 'Milk',
    },
    {
      id: Date.now(),
      text: 'Eggs',
    },
    {
      id: Date.now(),
      text: 'Bread',
    },
    {
      id: Date.now(),
      text: 'Juice',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
