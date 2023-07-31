import { Text, TouchableOpacity } from "react-native";
import buttonStyle from "../Styles/buttonStyle.style";


function Button({ persoTxt }) {
  function log() {
    console.log(persoTxt);
  }
  return (
    <TouchableOpacity style={buttonStyle.button} onPress={log}>
      <Text style={buttonStyle.btnTxt}>Click moi dessus !!</Text>
    </TouchableOpacity>
  );
}
export default Button;