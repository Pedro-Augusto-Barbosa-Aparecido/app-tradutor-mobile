import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#000",
        borderRadius: 10,

        // position: "absolute",
        // bottom: "50%",
        // left: 30,

        width: 360,

        padding: 15,
        paddingBottom: 2

    },

    textColor: {
        color: "#FFF"

    },

    title: {
        fontSize: 25

    },

    containerInstructions: {
        marginHorizontal: 10 

    },

    instruction: {
        marginTop: 10

    },

    button: {
        justifyContent: "center",
        alignItems: "center",

        marginTop: 15,

        padding: 10,

        borderTopWidth: 1,
        borderTopColor: "#EEE"

    }

});
