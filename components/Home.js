import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Screen } from "react-native-screens";
import { Button } from "react-native-web";

function Home({ navigation }) {
  const [name, setName] = useState();

  return (
    <Screen>
      <Text>Bienvenue sur la page Home</Text>

      <View>
        <Text>Veuillez entrer votre nom : </Text>
        <TextInput
          value={name}
          onChangeText={setName}/>
        <Button
          onPress={() => navigation.navigate("InfoLevelOne", { name })}
        >ClickME
        </Button>
      </View>
    </Screen>
  );
}


export default Home;