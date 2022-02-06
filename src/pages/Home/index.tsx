import { View, Text, TouchableOpacity } from "react-native";

import Container from "../../components/Container";
import { globalStyle } from "../../styles/global";
import { style } from './style';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from "@react-navigation/native";

export declare type NativeStackScreenProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> = {
    navigation: NativeStackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
};

export default function Home (props: NativeStackScreenProps<ParamListBase, string>) {
    return (
        <Container>
            <Text style={ globalStyle.textColor }>Hello World, It's Home dsdvdsvsdvsd Screen</Text>
            <View style={ style.containerButton }>
                <TouchableOpacity style={ style.button } onPress={() => props.navigation.navigate("Translator")}>
                    <Text style={ style.textButton }>Translator</Text>
                </TouchableOpacity>
            </View>
        </Container>

    );

}