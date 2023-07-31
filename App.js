import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {InfoLevel1} from "./Pages/InfoLevel1";
import {InfoLevel2} from "./Pages/InfoLevel2";






const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="InfoLevel1" component= {InfoLevel1}></Stack.Screen>
      <Stack.Screen name="InfoLevel2" component= {InfoLevel2}></Stack.Screen>
    </Stack.Navigator>
)

export default function App() {
  return (

    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>



    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <InfoPerso></InfoPerso>
    <Button persoTxt="testestest"></Button>
    </View>*/
  );
}


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/