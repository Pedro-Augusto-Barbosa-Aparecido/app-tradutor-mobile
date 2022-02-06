import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("window").width,
        margin: 0,
        marginTop: 33

    }

});
 