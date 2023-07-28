import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(true);

  const switchOnStyle = {
    backgroundColor: 'red',
    color: 'black',
  };

  const switchOffStyle = {
    backgroundColor: 'darkblue',
    color: 'white',
  };

  const handleSwitchOnPress = () => {
    setIsOn(true);
  };

  const handleSwitchOffPress = () => {
    setIsOn(false);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Pressable onPress={handleSwitchOnPress}>
        <Text style={[styles.button, isOn ? switchOnStyle : switchOffStyle]}>Switch On</Text>
      </Pressable>
      <Pressable onPress={handleSwitchOffPress}>
        <Text style={[styles.button, isOn ? switchOffStyle : switchOnStyle]}>Switch Off</Text>
      </Pressable>
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
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});