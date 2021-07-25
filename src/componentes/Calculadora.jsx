import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "../../styles/style";




export default function Calculadora() {

    const [state, setState] = useState({
        n1: 0,
        n2: 0,
        result: 0
    })
    const handleInputChange = (atributo, valor) => {
        setState({
            ...state, [atributo]: valor
        })
    }
    const somar = () => {
        setState({
            ...state, result: (state.n1 + state.n2)
        })
    }
    const subtarir = () => {
        setState({
            ...state, result: (state.n1 - state.n2)
        })
    }
    const multiplicar = () => {
        setState({
            ...state, result: (state.n1 * state.n2)
        })
    }
    const dividir = () => {
        setState({
            ...state, result: (state.n1 / state.n2)
        })
    }
    const potencia = () => {
        setState({
            ...state, result: (Math.pow(state.n1, state.n2))
        })
    }
    const raiz = () => {
        setState({
            ...state, result: (Math.sqrt(state.n1))
        })
    }
    const porcentagem = () => {
        setState({
            ...state, result: ((state.n1 / 100) * state.n2)
        })
    }
    const resto = () => {
        setState({
            ...state, result: (state.n1 % state.n2)
        })
    }
    return (

        <View style={styles.ViewCalc}>
            <View style={styles.ViewCalcNumber}>
                <Text style={styles.TextNumber}>Digite um numero!</Text>
                <TextInput style={styles.InputCalc}
                    placeholder=" 1 2 3 4 5 6 7 8 9 0 "
                    onChangeText={
                        (valor) => handleInputChange("n1", parseFloat(valor))
                    }
                />
                <Text style={styles.TextNumber}>Digite um numero!</Text>
                <TextInput style={styles.InputCalc}
                    placeholder="  1 2 3 4 5 6 7 8 9 0 "
                    onChangeText={
                        (valor) => handleInputChange("n2", parseFloat(valor))
                    }
                />
            </View>
            <View style={styles.ViewCalcFirst} >
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={somar}>
                        +
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={subtarir} >
                        -
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={multiplicar} >
                        *
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={dividir} >
                        /
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ViewCalcSecond}>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={potencia} >
                        X &#8319;
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={raiz}>
                        &radic;
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={porcentagem}>
                        %
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnCalc}>
                    <Text style={styles.TextBtn} onPress={resto}>
                        X%
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.TextResult}>
                {`Resultado  =  ${state.result}`}
            </Text>
        </View>
    )
}