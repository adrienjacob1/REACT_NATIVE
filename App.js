import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(true);
  const [catimg, setCatimg] = useState(require('./assets/yoyo.png'))

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

  const catChange = () => {
    if (catimg === require('./assets/yoyo.png')) {
      setCatimg(require('./assets/icon.png'))
    } else {
      setCatimg(require('./assets/yoyo.png'))
    }
  }




  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <View style={styles.viewbox}>
        <Pressable onPress={handleSwitchOnPress}>
          <Text style={[styles.button, isOn ? switchOnStyle : switchOffStyle]}>Switch On</Text>
        </Pressable>
        <Pressable onPress={handleSwitchOffPress}>
          <Text style={[styles.button, isOn ? switchOffStyle : switchOnStyle]}>Switch Off</Text>
        </Pressable>
      </View>

      <Pressable onPress={catChange}>
        <Image source={catimg} style={styles.imgstyle} />
      </Pressable>


    </SafeAreaView>
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
  imgstyle: {
    width: 350,
    height: 350,
    resizeMode: 'contain'
  },
  viewbox : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }

});