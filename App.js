import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InfoLevelOne from './components/InfoLevelOne';
import { InfoLevelTwo } from './components/InfoLevelTwo';
import Home from './components/Home';
import { SafeAreaView, FlatList, View, Text } from 'react-native';


const DATA = [
  { id: '1',
    title : 'Level1'},
  { id: '2',
   title : 'Level3'},
  { id: '3',
   title : 'Level3'},
];

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
)

export default function App() {


  return(
    <SafeAreaView>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}
    />

  </SafeAreaView>
  )






 /* return (

    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>



    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <InfoPerso></InfoPerso>
    <Button persoTxt="testestest"></Button>
    </View>
  );*/
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