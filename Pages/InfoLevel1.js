import { Button, Text } from "react-native";
import { Screen } from "react-native-screens";


export const InfoLevel1 = ({ navigation }) => {
    return (
        <Screen>
            <Text>Bienvenus sur la page 1</Text>
            <Button title="InfoLevel2" onPress={() => navigation.navigate("InfoLevel2")}></Button>
        </Screen>
    );
}
