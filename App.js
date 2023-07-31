import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InfoLevelOne from './components/InfoLevelOne';
import { InfoLevelTwo } from './components/InfoLevelTwo';
import Home from './components/Home';




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

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="InfoLevelOne" component={InfoLevelOne}></Stack.Screen>
      <Stack.Screen name="InfoLevelTwo" component={InfoLevelTwo}></Stack.Screen>
    </Stack.Navigator>
)
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