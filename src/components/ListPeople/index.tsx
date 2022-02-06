import { style } from "./styles";

import { StyleSheet, Text, View } from "react-native";

export type PeopleList = {
    title: string,
    peopleName: string[],
    marginTopProp: number

}

export default function ListPeople ({ marginTopProp = 0, peopleName, title }: PeopleList) {
    return (
        <View style={{ marginTop: marginTopProp }}>
            <View style={style.containerList}>
                <Text style={style.title}>{ title }</Text>
                {
                    peopleName.map((people, index) => {
                        return <Text style={style.peopleList} key={index}> * { people }</Text>

                    })
                } 
            </View>
        </View>

    );

}
