import { TextInput, Text } from 'react-native'
import UseValidation from "../hooks/useValidation"
import UseForm from "../hooks/useSendForm"
import Style from "../Styles/styles"


export default function InputComponent({tipo, onChangeText}) {
    const {hide,inputCont} = Style()        
    const { text, borderStyle, handleText } = UseValidation();
    const { handleChangeText } = UseForm(handleText, tipo, onChangeText);

  
    return (
      <>
        <TextInput
          style={[borderStyle, inputCont]}
          onChangeText={handleChangeText}
          placeholder={tipo}
        />
        <Text style={[text !== "" ? "" : hide, {marginBottom: 15}]}>{text}</Text>
      </>
    );
}
