import Container from "../../components/Container";

import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput

} from "react-native";

import { globalStyle } from "../../styles/global";
import { style } from './style';

import { NativeStackScreenProps } from "../Home";
import { ParamListBase } from "@react-navigation/native";

export default function Translator (props: NativeStackScreenProps<ParamListBase, string>) {
    return (
        <Container>
            <Text style={ [globalStyle.textColor, style.label] }>Digite seu termo aqui: </Text>
            <TextInput
             placeholder="Type your term here..." 
             placeholderTextColor={"#000"}
             multiline
             style={style.textInput}
            />
            <TouchableOpacity style={style.translateButton}>
                <Text style={{ color: "#FFF" }}>Search</Text>
            </TouchableOpacity>
            <View>{/* Colocar o resultado da pesquisa */}</View>
            <View style={ style.containerButton }>
                <TouchableOpacity style={ style.button } onPress={() => props.navigation.navigate("Home")}>
                    <Text style={ style.textButton }>Home</Text>
                </TouchableOpacity>
            </View>
        </Container>

    );

}