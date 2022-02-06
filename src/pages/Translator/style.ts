import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        
        backgroundColor: "#76F",
        
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 10

    },

    textButton: {
        fontSize: 20,
        fontWeight: "300",
        color: "#000",
        fontStyle: "italic"

    },

    containerButton: {
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 150,
        marginHorizontal: 20

    },

    label: {
        marginLeft: 20,
        marginTop: 30,

        fontSize: 20

    },

    textInput: {
        marginHorizontal: 20,
        marginTop: 15,

        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,

        padding: 10,
        height: 100,
        width: Dimensions.get("window").width - 40,
        textAlignVertical: "top",

    },

    translateButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,

        height: 50,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#7F5DFD"

    }

});