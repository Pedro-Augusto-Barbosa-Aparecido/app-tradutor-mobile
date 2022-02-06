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

    title: {
        fontSize: 30,
        color: "#798921",
        marginTop: 30,
        marginLeft: 20,
        fontWeight: "bold"

    }

});
