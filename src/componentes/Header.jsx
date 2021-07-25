
import {View,Text} from "react-native";
import React from "react";
import {styles} from "../../styles/style"


  export default function Header(){
       return(
           <View style={styles.ViewHeader}>
            <Text style={styles.TextHeader}>Header</Text>
           </View>
       )
  }