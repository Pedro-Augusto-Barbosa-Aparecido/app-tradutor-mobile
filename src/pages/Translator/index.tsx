import Container from "../../components/Container";

import { Text, View, TouchableOpacity, Dimensions } from "react-native";

import { globalStyle } from "../../styles/global";
import { style } from "./style";

import { NativeStackScreenProps } from "../Home";
import { ParamListBase } from "@react-navigation/native";

export default function Translator (props: NativeStackScreenProps<ParamListBase, string>) {
    return (
        <Container>
            <Text style={globalStyle.textColor}>Hello World, It's Translator Screen</Text>
            <View style={ style.containerButton }>
                <TouchableOpacity style={ style.button } onPress={() => props.navigation.navigate("Home")}>
                    <Text style={ style.textButton }>Home</Text>
                </TouchableOpacity>
            </View>
        </Container>

    );

}