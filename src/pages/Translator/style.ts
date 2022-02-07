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

    },

    labelContainer: {
        display: "flex",
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center"

    },

    icon: {
        marginTop: 38,
        marginRight: 25

    },

    containerList: {
        marginHorizontal: 10,

        padding: 20,
        paddingVertical: 0

    },

    containerListProps: {
        marginTop: 5,
        display: "flex",

        flexDirection: "row"

    },

    examplesContainer: {
        flexDirection: "column"

    },

    examplesContent: {
        padding: 10,
        paddingTop: 0,

        borderBottomColor: "#000",
        borderBottomWidth: 1

    },

    exampleContainer: {
        flexDirection: "column"

    },

    exampleAndReference: {
        padding: 15,
        paddingVertical: 0

    },

    contentWord: {

    },

    titleContent: {
        fontWeight: "bold"

    },

    mainContainerList: {
        marginVertical: 10,
        marginBottom: 90

    }

});