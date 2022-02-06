import { ReactNode } from "react";
import { SafeAreaView } from "react-native";

import { style } from "./style";

export default function Container ({ children }: { children: ReactNode }) {
    return (
        <SafeAreaView style={ style.container }>
            { children }
        </SafeAreaView>        
    );

}