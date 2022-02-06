import React from "react";

import { Dimensions, Modal, Text, TouchableOpacity, View } from "react-native";

import { style } from "./styles";

export type ModalHelperProps = {
    visible?: boolean,
    transparent?: boolean,
    changeModalVisible: Function

}

export default function ModalHelper ({ transparent = true, visible = false, changeModalVisible }: ModalHelperProps) {
    return (
        <Modal
            animationType="fade"
            visible={visible}
            transparent={transparent}
        >
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                height: Dimensions.get("screen").height,
                width: Dimensions.get("screen").width,


            }}>
                <View style={style.modalContainer}>
                    <Text style={ [style.textColor, style.title] }>Help</Text>
                    <View style={style.containerInstructions}>
                        <Text style={ [style.textColor, style.instruction] }> * Para traduzir os termos basta colocá-los no campo abaixo.</Text>
                        <Text style={ [style.textColor, style.instruction] }> * Para traduzir multiplos termos basta colocá-los separados por ';'.</Text>
                    </View>
                    <TouchableOpacity style={style.button} onPress={() => changeModalVisible(false)}>
                        <Text style={ [style.textColor] }>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );

}
