import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tela2 = () => {
  return (
    <View style={styles.container}>
      <Text>Tela 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tela2;