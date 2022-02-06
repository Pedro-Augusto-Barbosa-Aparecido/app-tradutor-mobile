import { View, Text, TouchableOpacity } from "react-native";

import Container from "../../components/Container";
import { globalStyle } from "../../styles/global";
import { style } from './style';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from "@react-navigation/native";
import ListPeople from "../../components/ListPeople";

export declare type NativeStackScreenProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> = {
    navigation: NativeStackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
};

export default function Home (props: NativeStackScreenProps<ParamListBase, string>) {
    return (
        <Container>
            <Text style={ [globalStyle.textColor, style.title] }>Dicionário técnico</Text>
            <ListPeople marginTopProp={60} peopleName={["Esthéfano V. Rosa n°4", "Pedro Augusto n°25", "Richard L. Ribeiro n°29"]} title={"Integrates: "} />
            <ListPeople marginTopProp={10} peopleName={["Pfª Ana Letícia", "Pfª Thalita"]} title={"Cordenadores: "} />
            <View style={ style.containerButton }>
                <TouchableOpacity style={ style.button } onPress={() => props.navigation.navigate("Translator")}>
                    <Text style={ style.textButton }>Translator</Text>
                </TouchableOpacity>
            </View>
        </Container>

    );

}