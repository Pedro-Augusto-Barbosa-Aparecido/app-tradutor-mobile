import Container from "../../components/Container";
import ModalHelper from "../../components/Modal";

import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput,
    Alert,
    ScrollView,
    Linking

} from "react-native";

import { globalStyle } from "../../styles/global";
import { style } from './style';

import { NativeStackScreenProps } from "../Home";
import { ParamListBase } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

import { StorageAccessFramework } from "expo-file-system";

import axios from "axios";

export type Word = {
    id?: string
    word: string
    translate: string
    examples: Array<Example>
    sep_sila?: string | null

}

export type Example = {
    example?: string
    reference?: string

}

export type WordResponse = {
    msg?: string,
    words?: Array<Word>,
    err?: unknown,
    success?: boolean,
    total?: number,
    words_created?: Array<Word>,
    words_equals?: Array<Word>,
    word?: Word

}

export const toggleBoolean = (value: boolean, fn: Function): void => value === true ? fn(false) : fn(true);

export default function Translator (props: NativeStackScreenProps<ParamListBase, string>) {
    const DOCUMENTS_URI_SAF = StorageAccessFramework.getUriForDirectoryInRoot("Documents");

    const [visible, setVisible] = useState<boolean>(false);
    const [textInputContent, setTextInputContent] = useState<string>("");
    const [content, setContent] = useState<Array<Word>>([]);
    const [errorNetwork, setErrorNetwork] = useState<{ errorNetwork: boolean, message: string }>({ errorNetwork: false, message: "Error on network" });

    // https://6715-170-231-187-220.ngrok.io
    const [url, setUrl] = useState<string>("https://translator-server-refactoring.herokuapp.com");

    

    const searchOnline = async (word: string) => {
        try {
            const res = await axios.post(`${url}/word/get-contains`, {
                __word: word
            });
    
            const data: WordResponse = res.data;
    
            if (data.words) {
                const words = data.words;
                setContent([...words]);
    
            } else 
                setContent([]);

        } catch (err) {
            Alert.alert("Network Error", "Error on connection, search term again for use offline!");
            setContent([]);
            setErrorNetwork({ errorNetwork: true, message: "Connection Error! Try Later." });

        }

    };

    const getReference = (reference: string) => {
        if (reference.includes(".pdf"))
            Linking.openURL(reference);

        else if (reference === "No Reference")
            Linking.openURL("https://translate.google.com");

        else
            Linking.openURL(reference);

    } 

    return (
        <Container>
            <ModalHelper visible={visible} changeModalVisible={setVisible} />
            <View style={style.labelContainer}>
                <Text style={ [globalStyle.textColor, style.label] }>Digite seu termo aqui: </Text>
                <Entypo onPress={() => setVisible(true)} style={style.icon} name={"help-with-circle"} color={"blue"} size={15} />
            </View>
            <TextInput
                placeholder="Type your term here..." 
                placeholderTextColor={"#000"}
                multiline
                style={style.textInput}
                onChangeText={(text) => setTextInputContent(text)}
            />
            <TouchableOpacity onPress={() => {
                searchOnline(textInputContent);

            }} style={style.translateButton}>
                <Text style={{ color: "#FFF" }}>Search</Text>
            </TouchableOpacity>
            <ScrollView style={style.mainContainerList}>
                {
                    content.length > 0 ? content.map((word, index) => {
                        return (
                            <View style={style.containerList} key={index}>
                                <View style={ [style.containerListProps] }>
                                    <Text style={ [style.titleContent] }>Term: </Text>
                                    <Text style={ [style.contentWord] }>{ word.word }</Text>
                                </View>
                                <View style={ [style.containerListProps] }>
                                    <Text style={ [style.titleContent] }>Silaba: </Text>
                                    <Text style={ [style.contentWord] }>{ word.sep_sila }</Text>
                                </View>
                                <View style={ [style.containerListProps] }>
                                    <Text style={ [style.titleContent] }>Tradução:  </Text>
                                    <Text style={ [style.contentWord] }>{ word.translate }</Text>
                                </View>
                                <View style={ [style.containerListProps, style.examplesContainer] }>
                                    <Text style={ [style.titleContent] }>Exemplos: </Text>
                                    {
                                        word.examples.map((example, index) => {
                                            return <View style={ [style.examplesContent] } key={index}>
                                                        <View style={ [style.containerListProps, style.exampleContainer] } >
                                                            <Text style={ [style.titleContent] }>Exemplo: </Text>
                                                            <Text style={ [style.exampleAndReference, style.contentWord] } >{ example.example }</Text>
                                                        </View>
                                                        <View style={ [style.containerListProps, style.exampleContainer] } >
                                                            <Text style={ [style.titleContent] }>Referência: </Text>
                                                            <Text onPress={() => getReference(example.reference || "No Reference")} style={ [style.exampleAndReference, style.contentWord] } >{ example.reference || "No Reference" }</Text>
                                                        </View>
                                                    </View>
                                        })
                                    }
                                </View>
                            </View>
                        )

                    })

                    :

                    <View></View>

                }
            </ScrollView>
            {/* <View style={ style.containerButton }>
                <TouchableOpacity style={ style.button } onPress={() => props.navigation.navigate("Home")}>
                    <Text style={ style.textButton }>Home</Text>
                </TouchableOpacity>
            </View> */}
        </Container>

    );

}