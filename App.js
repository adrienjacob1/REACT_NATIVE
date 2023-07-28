import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



let toSwitch = false;

export default function App() {
  const [color, setColor] = useState({color:'green'});
  const [name, setName] = useState("App");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={color}
      onPress={() => { 

        if (toSwitch) {
          setColor({color:'green'});
          setName("App");
        }
        else {
          setColor({color:'blue'});
          setName("SUPER App");
        }

        toSwitch = !toSwitch;

        console.log(toSwitch);

      } }> <p>Open up App.js to START working on your {name} !</p> <p>COUCOU</p> </Text>
      
      <div className='buttonSwitch'>
        <button onClick={() => { 
            setColor({color:'blue'});
            setName("SUPER App");
        } }>Un beau button : BLUE</button>

        <button onClick={() => { 
            setColor({color:'green'});
            setName("App");
        } }>Un beau button : GREEN</button>
      </div>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(155,255,210)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'black',
    textAlign: 'center',
  },
  buttonSwitch: {
    flex: 1,
  }
});