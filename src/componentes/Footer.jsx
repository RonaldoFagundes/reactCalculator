import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles/style"


export default function Footer() {
    return (
        <View style={styles.ViewFooter}>
            <Text style={styles.TextFooter}>&copy;Dev@RFagundes</Text>
        </View>
    )
}
