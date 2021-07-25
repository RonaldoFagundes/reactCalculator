import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles/style";
import Calculadora from "./Calculadora"


export default function Content() {
    return (
        <View style={styles.ViewContent}>
            <Text style={styles.TextContent}>appCalculadora-React-Native</Text>
            <Calculadora />
        </View>
    )

}