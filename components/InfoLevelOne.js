import { useRoute } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { Screen } from 'react-native-screens';


function InfoLevelOne(navigation){

  const route = useRoute();
  const { name }= route.params;
  return(
    <Screen>
      <Text>InfoLevelOne</Text>
      <Text>Bienvenue {name} sur New Page</Text>

      <Button
        title="InfoLevelTwo"
        onPress={()=>navigation.navigate("InfoLevelTwo")} />
    </Screen>
  )
}
 
export default InfoLevelOne;
